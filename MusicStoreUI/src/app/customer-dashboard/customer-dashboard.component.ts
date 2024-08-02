import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { getAlbums } from '../service/album.data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, ],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})

export class CustomerDashboardComponent implements OnInit{
  albums:Album[] = [];
  cart: Set<number> = new Set();
  apiUrl: string = 'http://localhost:5160';
  userId: string | null = sessionStorage.getItem("userId");

  constructor(
    private albumDataService:getAlbums,
    private http: HttpClient
  ){
      
    }
    
    public ngOnInit(): void {
      this.showAlbums();
    }
    
    showAlbums():any{
      this.albumDataService.getAllAlbums().subscribe({
        next: data=>{
          this.albums = data.map(item => new Album(
            item.albumId,
            item.albumName,
            item.outletID,
            item.outletName,
            item.discount,
            item.priceAfterDiscount
          ));
        },
        error: err => {
          console.error('Error fetching albums:', err);
        }
      });
    }

    addToCart(albumId: number, outletID: number): void {
      if (this.userId) {
        const body = {
          albumId: albumId,
          outletId: outletID,
          userId: this.userId,
          quantity: 1
        };
        this.http.post(`${this.apiUrl}/cart/addToCart`, body).subscribe({
          next: () => {
            console.log('Item added to cart successfully');
            this.cart.add(albumId);
          },
          error: err => {
            console.error('Error adding item to cart:', err);
            this.cart.add(albumId);
          }
        });
    }
  }

    isInCart(albumId: number): boolean {
      return this.cart.has(albumId);
    }
}
