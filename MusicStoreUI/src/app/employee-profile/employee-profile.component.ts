import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from '../service/UserDetails.service';
import { Employee } from '../models/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-profile',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css'],
})
export class EmployeeProfileComponent implements OnInit {
  userId: string  | null = '';
  employee: Employee;

  constructor(private router: Router, private userDetailsService: UserDetailsService) {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      if( sessionStorage.getItem('userType')!== "E" ){
        window.location.href= "/";
      }
      this.userId= sessionStorage.getItem("userId");
    }

    this.employee = new Employee(0, '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    this.getEmployeeDetails();
  }

  getEmployeeDetails(): void {
    this.userDetailsService.getEmployeeDetails(this.userId).subscribe(
      data => {
        this.employee = data;
        console.log('Employee data fetched successfully:', this.employee);
      },
      error => {
        console.error('Error fetching employee data', error);
      }
    );
  }
}
