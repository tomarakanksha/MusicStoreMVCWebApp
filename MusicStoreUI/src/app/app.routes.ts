import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { HomeComponent } from './home-component/home-component.component';
import { RegisterComponent } from './register-component/register-component.component';
import { CartComponent } from './cart-component/cart-component.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SignoutComponent } from './signout/signout.component';
import { PaymentComponent } from './payment/payment.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FormsModule } from '@angular/forms';


export const routes: Routes = [
    {path: 'Login', component:LoginComponent},
    {path: '', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'cart', component: CartComponent},
    { path: 'CustomerDashboard', component: CustomerDashboardComponent },
    {path:'AlbumDetails', component:AlbumDetailsComponent},
    { path: 'EmployeeDashboard', component: EmployeeDashboardComponent },
    { path: 'payment', component: PaymentComponent},
    { path: 'shipping', component: ShippingComponent},
    {path: 'Logout', component:SignoutComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes), FormsModule],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
