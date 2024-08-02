import { Component } from '@angular/core';
import { getAlbums } from '../service/album.data.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Song } from '../models/song';
import { CommonModule } from '@angular/common';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css'
})
export class AlbumDetailsComponent {
  songs:Song[] = [];
  albumId:number= 0;
  albumName:string= '';
  constructor(
    private albumDataService:getAlbums, private route:ActivatedRoute, userService:UserService){
      if (typeof window !== 'undefined' && window.sessionStorage) {
        if( sessionStorage.getItem('userType')!== "C" && sessionStorage.getItem('userType')!== "E"){
          window.location.href= "/Login";
        }
      }

      this.route.queryParams.subscribe(params => {
        this.albumId = params['albumid'];});
        this.GetSongsByAlbumId();
      
    }

  GetSongsByAlbumId():any{
    this.albumDataService.GetSongsByAlbumId(this.albumId).subscribe({
      next: data=>{
        this.songs = data.map(item => new Song(
          item.songId,
          item.albumId,
          item.albumName,
          item.artistName,
          item.genreName,
          item.songName,
          item.refDemoFilePath
        ));
      }
    })
  }
  
}
