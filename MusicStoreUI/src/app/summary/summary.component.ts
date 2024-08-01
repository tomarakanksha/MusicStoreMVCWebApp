import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../service/summary.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  orderNumber!: string;
  estimatedDeliveryDate!: string;

  constructor(private summaryService: SummaryService) {}

  ngOnInit(): void {
    const orderDetails = this.summaryService.getOrderDetails();
    this.orderNumber = orderDetails.orderNumber;
    this.estimatedDeliveryDate = orderDetails.estimatedDeliveryDate;
  }
}
