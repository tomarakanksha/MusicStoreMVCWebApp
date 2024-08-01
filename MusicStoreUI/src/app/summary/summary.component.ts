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
    const summary = this.summaryService.getOrderDetails();
    this.orderNumber = summary.orderNumber;
    this.estimatedDeliveryDate = summary.estimatedDeliveryDate;
    this.totalAmount = summary.totalAmount;
    this.billingAddress = summary.billingAddress;
    this.shippingAddress = summary.shippingAddress;
    this.items = summary.items;
  }
}
