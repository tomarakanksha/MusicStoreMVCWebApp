import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SignoutComponent } from './signout/signout.component';

export const routes: Routes = [
    {path: 'Login', component:LoginComponent},
    { path: 'CustomerDashboard', component: CustomerDashboardComponent },
    {path:'AlbumDetails', component:AlbumDetailsComponent},
    { path: 'EmployeeDashboard', component: EmployeeDashboardComponent },
    {path: 'Logout', component:SignoutComponent},
];
