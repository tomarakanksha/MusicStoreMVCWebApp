import { Component } from '@angular/core';

@Component({
  selector: 'app-signout',
  standalone: true,
  imports: [],
  templateUrl: './signout.component.html',
  styleUrl: './signout.component.css'
})
export class SignoutComponent {
  constructor(){
    sessionStorage.removeItem('userType');
    sessionStorage.removeItem('userId');
  }
}
