import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  getOrderDetails() {
    return {
      orderNumber: '123456',
      estimatedDeliveryDate: this.calculateEstimatedDeliveryDate(),
      totalAmount: 250.00,
      billingAddress: '123 Main St, Springfield, IL, 62701',
      shippingAddress: '456 Elm St, Springfield, IL, 62702',
      items: [
        { albumName: 'Album 1', price: 50 },
        { albumName: 'Album 2', price: 100 },
        { albumName: 'Album 3', price: 100 }
      ]
    };
  }

  private calculateEstimatedDeliveryDate(): string {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 10); 
    return currentDate.toDateString();
  }
}
