import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from '../models/PaymentModel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentMode: string = '';
  cardDetails: any = {
    cardNumber: '',
    cardName: '',
    expirationDate: '',
    cvv: ''
  };

  constructor(private router: Router) {}

  proceedToShipping(): void {
    if (this.paymentMode) {
      this.router.navigate(['/shipping']);
    } else {
      alert('Please select a payment mode.');
    }
  }
}
