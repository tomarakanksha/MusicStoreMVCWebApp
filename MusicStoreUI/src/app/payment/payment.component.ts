import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from '../models/PaymentModel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  orderId: number = 0;
  apiUrl: string = 'http://localhost:5160';
  paymentMode: string = '';
  cardDetails: any = {
    cardNumber: '',
    cardName: '',
    expirationDate: '',
    cvv: ''
  };

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        if( sessionStorage.getItem('userType')!== "C" ){
          window.location.href= "/";
        }
      }
  }

  ngOnInit(): void {
    // Extract orderId from query string
    this.route.queryParams.subscribe(params => {
      this.orderId = +params['orderId']; // The '+' converts the string to a number
    });
  }

  proceedToShipping(): void {
    this.completeOrder();
  }
  completeOrder(): void {
    if (this.orderId && this.paymentMode) {
      const headers = new HttpHeaders({
        'orderId': this.orderId.toString(),
        'paymentMode': this.paymentMode
      });

      this.http.post(`${this.apiUrl}/order/CompleteOrder`, null, { headers: headers }).subscribe({
        next: () => {
          console.log('Order completed successfully');
          window.location.href = '/summary?orderId='+this.orderId;
        },
        error: err => {
          alert('Please select a payment mode.');
        }
      });
    } else {
      alert('Payment Mode is missing');
    }
  }
}
