import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login'; 

const API_URL = 'https://localhost:7000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/JSON', 'Access-Control-Allow-Origin':'*', })
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
    
  }

  login(signInData: Login): Observable<any> {
    return this.http.post<any>(API_URL+ '/Home/Authenticate', signInData, httpOptions);
  }
}