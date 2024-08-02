import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { EmployeeService } from '../service/employee.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { getAlbums } from '../service/album.data.service';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  albums: Album[] = [];
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
}
