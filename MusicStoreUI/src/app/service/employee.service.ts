import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { Employee } from '../models/employee';

const API_URL = 'http://localhost:5160';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getAllAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${API_URL}/Albums/GetAlbums`, httpOptions);
  }
  
  getEmployeeDetails(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${API_URL}/Employee/GetEmployeeByID?id=`+id, httpOptions);
  }
}
