import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent { 
  constructor(private router: Router){  
    
  }
  getData(): void{
    if (sessionStorage.getItem("userType") != undefined){
      if(sessionStorage.getItem('userType') == 'C'){
        
        
      }
      else if(sessionStorage.getItem('userType') == 'E'){

      }
      else{
        this.router.navigate(['/']);
      }
    }
  }

}
