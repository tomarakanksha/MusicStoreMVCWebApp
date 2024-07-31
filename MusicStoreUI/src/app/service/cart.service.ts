import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CartItem {
  albumId: number;
  albumName: string;
  price: number;
  quantity: number;
}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/JSON', 'Access-Control-Allow-Origin':'*', })
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:5160';

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.apiUrl+'/cart/getCartItems',httpOptions);
  }
}
