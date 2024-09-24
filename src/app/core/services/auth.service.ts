import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private loggedIn = new BehaviorSubject<boolean>(this.getLoginState());
  
  loggedIn$ = this.loggedIn.asObservable();

  login() {
    localStorage.setItem('isLoggedIn', 'true'); 
    this.loggedIn.next(true);
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.loggedIn.next(false);
  }

  isLoggedIn(): boolean {
    return this.loggedIn.value; 
  }
  
  private getLoginState(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

}
