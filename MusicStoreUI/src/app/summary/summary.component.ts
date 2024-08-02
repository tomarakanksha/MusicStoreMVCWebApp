import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SummaryService } from '../service/summary.service';
import { OrderDetail } from '../models/OrderDetail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  orderNumber: string = '';
  estimatedDeliveryDate: string = '';
  totalAmount: number = 0;
  billingAddress: string = '';
  shippingAddress: string = '';
  items: { albumName: string, price: number }[] = [];

  constructor(
    private summaryService: SummaryService,
    private route: ActivatedRoute
  ) {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      if( sessionStorage.getItem('userType')!== "C" && sessionStorage.getItem('userType')!== "E"){
        window.location.href= "/";
      }
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const orderId = +params['orderId']; // Convert to number
      if (orderId) {
        this.loadOrderSummary(orderId);
      }
    });
  }

  loadOrderSummary(orderId: number): void {
    this.summaryService.getOrderSummary(orderId).subscribe({
      next: (details: OrderDetail[]) => {
        if (details.length > 0) {
          const firstItem = details[0];
          this.orderNumber = firstItem.orderNum;
          this.billingAddress = firstItem.billingAddr;
          this.shippingAddress = firstItem.shippingAddr;
          this.items = details.map(item => ({
            albumName: item.albumName,
            price: item.price
          }));
          this.totalAmount = this.items.reduce((sum, item) => sum + item.price, 0);
          this.estimatedDeliveryDate = this.summaryService.calculateEstimatedDeliveryDate();
        }
      },
      error: (error) => {
        console.error('Error fetching order summary:', error);
        // Handle error (e.g., show error message to user)
      }
    });
  }
}
