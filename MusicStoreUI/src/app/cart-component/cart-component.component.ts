import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../service/cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.calculateTotalPrice();
    });
    // this.cartItems = [
    //   { albumName: 'Lover', price: 15.99, quantity: 1 },
    //   { albumName: 'Dangerous Woman', price: 12.49, quantity: 2 },
    //   { albumName: 'Folklore', price: 8.99, quantity: 3 }
    // ];
    this.calculateTotalPrice();
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
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  checkout(): void {
    this.router.navigate(['/payment']);
  }
}
