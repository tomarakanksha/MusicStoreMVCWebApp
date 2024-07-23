import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AddAlbumComponent } from './add-album/add-album.component';

export const routes: Routes = [
    {path: 'Login', component:LoginComponent},
    { path: 'CustomerDashboard', component: CustomerDashboardComponent },
    { path: 'EmployeeDashboard', component: EmployeeDashboardComponent },
    { path: 'Album', component: AddAlbumComponent},
    {path: 'Logout', component:LoginComponent},
];
