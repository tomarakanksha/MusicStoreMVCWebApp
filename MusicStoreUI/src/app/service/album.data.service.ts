import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { Song } from '../models/song';


const API_URL = 'https://localhost:7000';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/JSON', 'Access-Control-Allow-Origin':'*', })
  }

@Injectable({
    providedIn: 'root',
  })
export class getAlbums{
    constructor (private http:HttpClient){}

    getAllAlbums(): Observable<Album[]>{ //so that any other component is able to subscribe
        return this.http.get<Album[]>(API_URL+'/Albums/GetAlbums',httpOptions); 
    }
    GetSongsByAlbumId(id:number): Observable<Song[]>
    {
        return this.http.get<Song[]>(API_URL+ '/Albums/GetSongsByAlbumId?id='+ id,httpOptions);
    }
    
}