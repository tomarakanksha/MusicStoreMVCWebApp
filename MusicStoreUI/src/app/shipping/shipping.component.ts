import { Component, OnInit } from '@angular/core';
import { ShippingService } from '../service/shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  orderNumber!: string;
  estimatedDeliveryDate!: string;

  constructor(private shippingService: ShippingService) {}

  ngOnInit(): void {
    const orderDetails = this.shippingService.getOrderDetails();
    this.orderNumber = orderDetails.orderNumber;
    this.estimatedDeliveryDate = orderDetails.estimatedDeliveryDate;
  }
}
