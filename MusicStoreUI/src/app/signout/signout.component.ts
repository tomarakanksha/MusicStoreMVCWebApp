import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  standalone: true,
  imports: [],
  templateUrl: './signout.component.html',
  styleUrl: './signout.component.css'
})
export class SignoutComponent {
  constructor(private router: Router){
    sessionStorage.removeItem('userType');
    sessionStorage.removeItem('userId');
    window.location.href = '/';
  }
}
