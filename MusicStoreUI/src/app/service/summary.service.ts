import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  private apiUrl = 'http://localhost:5160';

  constructor(private http: HttpClient) {}
  getOrderDetails() {
    return this.http.get<any>(`${this.apiUrl}/order/orderSummary`);
  }

  private calculateEstimatedDeliveryDate(): string {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 10); 
    return currentDate.toDateString();
  }
}
