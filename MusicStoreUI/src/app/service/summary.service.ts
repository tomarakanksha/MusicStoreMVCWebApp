import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  getOrderDetails() {
    return {
      orderNumber: '123456789',
      estimatedDeliveryDate: this.calculateEstimatedDeliveryDate(),
    };
  }

  private calculateEstimatedDeliveryDate(): string {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 10); 
    return currentDate.toDateString();
  }
}
