import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../service/summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  orderNumber!: string;
  estimatedDeliveryDate!: string;
  totalAmount!: number;
  billingAddress!: string;
  shippingAddress!: string;
  items: { albumName: string, price: number }[] = [];

  constructor(private summaryService: SummaryService) {}

  ngOnInit(): void {
    // const summary = this.summaryService.getOrderDetails();
    // this.orderNumber = this.summary.orderNumber;
    // this.estimatedDeliveryDate = this.summary.calculateEstimatedDeliveryDate();
    // this.totalAmount = this.summary.totalAmount;
    // this.billingAddress = this.summary.billingAddress;
    // this.shippingAddress = this.summary.shippingAddress;
    // this.items = this.summary.items;
  }
}
