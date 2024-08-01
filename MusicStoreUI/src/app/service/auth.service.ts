import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login'; 
import { RegisterModel } from '../models/RegisterModel';

const API_URL = 'http://localhost:5160';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/JSON', 'Access-Control-Allow-Origin':'*', })
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
    
  }

  login(signInData: Login): Observable<any> {
    return this.http.post<any>(API_URL+ '/Home/Authenticate', signInData, httpOptions);

  }

  register(registerModel: RegisterModel): XMLHttpRequest {
    const xhr = new XMLHttpRequest();
    const url = API_URL + '/Customer/Register';
    
    xhr.open('POST', url, false); // false makes the request synchronous
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.send(JSON.stringify(registerModel));
    
    return xhr;
  }
}