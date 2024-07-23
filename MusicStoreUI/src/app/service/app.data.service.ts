import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album';


const API_URL = 'https://localhost:7000';

export class getAlbums{
    constructor (private http:HttpClient, private album:Album
    ){}
    getAllAlbums(): Observable<any>{ //so that any other component is able to subscribe
        return this.http.get(API_URL+'/Albums/GetAlbums', {responseType:'json'})
    }
}