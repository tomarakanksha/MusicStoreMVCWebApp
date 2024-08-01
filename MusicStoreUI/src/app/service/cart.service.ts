import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CartItem {
  cartID: number,
  albumId: number;
  albumName: string;
  priceAfterDiscount: number;
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

  getCartItems(userId: string | null): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.apiUrl+'/cart/getCartItems?userId='+userId,httpOptions);
  }
}
