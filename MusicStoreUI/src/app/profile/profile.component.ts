import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../service/UserDetails.service';
import { Customer } from '../models/customer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit { 
  customer: Customer = new Customer(0, '', '', '', '', '', '', '', '');
  
  constructor(private userDetailsService: UserDetailsService){
    if( sessionStorage.getItem('userType')!== "C"){
      window.location.href= "/";
    }
  }
  
  ngOnInit(): void {
    this.fetchCustomerDetails();
  }

  fetchCustomerDetails(): void {
    const userId = sessionStorage.getItem('userId');
    console.log(userId);
    if (userId) {
      this.userDetailsService.getCustomerDetails(parseInt(userId)).subscribe({
        next: (data: Customer) => {
          this.customer = data;
        },
        error: (err) => {
          console.error('Error fetching customer details:', err);
        }
      });
    } else {
      console.error('No user ID found in session storage');
    }
  }
}