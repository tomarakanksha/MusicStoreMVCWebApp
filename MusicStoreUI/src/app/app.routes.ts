import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { HomeComponent } from './home-component/home-component.component';
import { RegisterComponent } from './register-component/register-component.component';
import { CartComponent } from './cart-component/cart-component.component';

export const routes: Routes = [
    {path: 'Login', component:LoginComponent},
    {path: '', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'cart', component: CartComponent},
    { path: 'CustomerDashboard', component: CustomerDashboardComponent },
    { path: 'EmployeeDashboard', component: EmployeeDashboardComponent },
    { path: 'Album', component: AddAlbumComponent},
    {path: 'Logout', component:LoginComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
