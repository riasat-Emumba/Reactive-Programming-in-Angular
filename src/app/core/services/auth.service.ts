import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LOGIN_STATUS_KEY, USER_CREDENTIALS } from '../constants/user.constants';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private readonly LOGIN_STATUS_KEY = LOGIN_STATUS_KEY;
  private loggedIn = new BehaviorSubject<boolean>(this.getLoginState());
  loggedIn$ = this.loggedIn.asObservable();

  login(): void {
    this.setLoginState(true);
  }

  logout(): void {
    this.setLoginState(false);
  }

  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }

  isAdmin(): boolean {
    return localStorage.getItem(USER_CREDENTIALS.IS_ADMIN) === 'true';
  }

  private getLoginState(): boolean {
    return localStorage.getItem(this.LOGIN_STATUS_KEY) === 'true';
  }

  private setLoginState(isLoggedIn: boolean): void {
    localStorage.setItem(this.LOGIN_STATUS_KEY, isLoggedIn.toString());
    this.loggedIn.next(isLoggedIn);
  }

}
