import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Customer } from "../models/customer";
import { Employee } from '../models/employee';

const API_URL = 'http://localhost:5160';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/JSON', 'Access-Control-Allow-Origin':'*', })
  }

@Injectable({
    providedIn: 'root',
  })
export class UserDetailsService{
    constructor (private http:HttpClient){}

    getCustomerDetails(id: number):Observable<Customer>{
        return this.http.get<Customer>(API_URL+ '/Customer/GetCustomerByID?id='+ id,httpOptions);
    }

    getEmployeeDetails(id: number):Observable<Employee>{
        return this.http.get<Employee>(API_URL+ '/Employee/GetEmployeeByID?id='+ id,httpOptions);
    }
}
