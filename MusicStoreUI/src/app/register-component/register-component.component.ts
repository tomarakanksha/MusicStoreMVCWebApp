import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegisterModel } from '../models/RegisterModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register-component',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.css'
})
export class RegisterComponent {
  errormessage : string = "";
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
  constructor(private router: Router, private authService: AuthService) {}
  onSubmit(): void {
    
    var response = this.authService.register(this.model);
        if (response.status == 200 && response.responseText == "New User Created" )
        {
          this.errormessage = "";
          this.router.navigate(['/Login']);
        }
        else if (response.status == 200 && response.responseText == "User already Exist"){
          this.errormessage = "This emailId is already registered. Please try another emailId or login to continue."
        }
        else{
          this.errormessage = "Something went wrong."
        }
      }
 
}
