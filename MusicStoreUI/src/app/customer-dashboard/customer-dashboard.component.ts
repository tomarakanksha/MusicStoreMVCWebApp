import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { getAlbums } from '../service/album.data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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

  constructor(
    private albumDataService:getAlbums){
      
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

    addToCart(albumId: number): void {
      this.cart.add(albumId); //post request with albumid, outlet id, userid. response ok, button disabled.
    }

    isInCart(albumId: number): boolean {
      return this.cart.has(albumId);
    }
}
