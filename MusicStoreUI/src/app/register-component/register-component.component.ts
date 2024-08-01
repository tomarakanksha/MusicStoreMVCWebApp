import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegisterModel } from '../models/RegisterModel';

@Component({
  selector: 'app-register-component',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.css'
})
export class RegisterComponent {
  model = new RegisterModel(
    '',
    '',
    '',
    '',
    '',
    ''
  );

  // onFileChange(event: any): void {
  //   if (event.target.files.length > 0) {
  //     this.model.verificationId = event.target.files[0];
  //   }
  // }
  constructor(private router: Router) {}
  onSubmit(): void {
    console.log('Registration data:', this.model);
    this.router.navigate(['/customer-dashboard']);
  }
}
