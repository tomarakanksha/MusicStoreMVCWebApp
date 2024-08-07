import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../service/cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartDTO, OrderItemsDTO } from '../models/Order';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})

export class CartComponent implements OnInit {
  //cartItems: CartItem[] = [];
  cartItems: any[] = [];
  totalPrice: number = 0;
  userId: string | null = '';
  orderId: number = 0;
  apiUrl: string = 'http://localhost:5160';
  

  constructor(
    private cartService: CartService, 
    private router: Router, 
    private http: HttpClient
  ) {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      if( sessionStorage.getItem('userType')!== "C" && sessionStorage.getItem('userType')!== "E"){
        window.location.href= "/";
      }
      this.userId= sessionStorage.getItem("userId")
    }
   }

  ngOnInit(): void {
    this.cartService.getCartItems(this.userId).subscribe(items => {
      this.cartItems = items;
      this.calculateTotalPrice();
    });
    // this.calculateTotalPrice();
  }

  increaseQuantity(item: any): void {
    item.quantity++;
    this.calculateTotalPrice();
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotalPrice();
    }
  }
  removeItem(item: any): void {
    if(this.userId) {
      this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
      const body = { cartId: item.cartID };

      this.http.post(`${this.apiUrl}/Cart/RemoveItem`, body).subscribe({
        next: () => {
          console.log('Item removed successfully');
          this.calculateTotalPrice();
        },
        error: err => {
          console.error('Error removing item:', err);
        }
      });
    }
    
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.priceAfterDiscount * item.quantity, 0);
  }
  
  checkout(): void {
    if (this.userId) {
      const orderItems: OrderItemsDTO = {
        userId: this.userId,
        cartItemsList: this.cartItems
      };

      this.http.post<{ orderId: number }>(`${this.apiUrl}/order/createOrder`, orderItems).subscribe({
        next: (response) => {
          this.orderId = response.orderId;
          console.log('Order created successfully with ID:', this.orderId);
          this.router.navigate(['/payment'], { queryParams: { orderId: this.orderId } });
        },
        error: err => {
          console.error('Error creating order:', err);
        }
      });
    }
  }
}
