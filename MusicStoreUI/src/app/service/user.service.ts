import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUserType() {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      return sessionStorage.getItem('userType') || 'I';
    }
    return 'I';
  }
}
