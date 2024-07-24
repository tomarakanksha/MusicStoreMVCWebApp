import { Component } from '@angular/core';
import { Album } from '../models/album';
import { getAlbums } from '../service/album.data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})
export class CustomerDashboardComponent {
  albums:Album[] = [];
  constructor(
    private albumDataService:getAlbums){
      
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
      })
    }
}
