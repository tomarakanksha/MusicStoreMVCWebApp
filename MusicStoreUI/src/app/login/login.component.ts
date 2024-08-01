import { Component } from '@angular/core';
import { Login } from '../models/login'; 
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule , JsonPipe} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  signinData = new Login(0,"","",'I', '')
  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  onSubmit(): void {
    this.authService.login(this.signinData).subscribe({
      next: data=>{
        var response = data;
        if (response && response.userId && response.userType && response.userId !== 0) {
          sessionStorage.setItem('userId', response.userId);
          sessionStorage.setItem('userType', response.userType);
         
          if (response.userType === 'E') {
            this.router.navigate(['/EmployeeDashboard']);
          } else {
            this.router.navigate(['/CustomerDashboard']);
          }
        } else {
          console.error('Invalid login.', response);
        }
      }
    })
}}