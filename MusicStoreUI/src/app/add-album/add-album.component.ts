import { Component } from '@angular/core';
import {Album} from '../models/album';
import {getAlbums} from '../service/app.data.service';

@Component({
  selector: 'app-add-album',
  standalone: true,
  imports: [],
  templateUrl: './add-album.component.html',
  styleUrl: './add-album.component.css'
})
export class AddAlbumComponent {

  albumData = new Album("Beautyfull Songs","happy","Taylor Swift",7)
  constructor(
    private albumDataService:getAlbums
  ){}

  showAlbums():any{
    this.albumDataService.getAllAlbums().subscribe({
      next: data=>{
        var abc = data;
      }
    })
  }
  

}
