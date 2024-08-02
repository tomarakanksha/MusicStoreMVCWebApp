// src/app/services/summary.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderDetail } from '../models/OrderDetail';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  private apiUrl = 'http://localhost:5160';

  constructor(private http: HttpClient) {}

  getOrderSummary(orderId: number): Observable<OrderDetail[]> {
    return this.http.get<OrderDetail[]>(`${this.apiUrl}/order/GetOrderSummary`, {
      params: { orderid: orderId.toString() }
    });
  }


  calculateEstimatedDeliveryDate(): string {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 10); 
    return currentDate.toDateString();
  }
}
