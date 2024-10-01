import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MESSAGES, PATHS, USER_CREDENTIALS } from '../../constants/constants';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
 
  loginForm!: FormGroup;
  
  constructor(private fb: FormBuilder, 
    private router: Router, 
    private notificationService: NotificationService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
    this.checkLoginStatus();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      isAdmin: [false],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { userName, password, isAdmin } = this.loginForm.value;
      this.processLogin(userName, password, isAdmin);
    } else {
      this.validateFormFields();
    }
  }

  private processLogin(userName: string, password: string, isAdmin: boolean): void {
    if (this.isLoginSuccessful(userName, password, isAdmin)) {
      this.handleLogin(userName, password,isAdmin);
    } else {
      this.handleInvalidLogin();
    }
  }

  private isLoginSuccessful(userName: string, password: string, isAdmin: boolean): boolean {
    const storedUserName = localStorage.getItem(USER_CREDENTIALS.USER_NAME);
    const storedPassword = localStorage.getItem(USER_CREDENTIALS.PASSWORD);
    const storedRole = localStorage.getItem(USER_CREDENTIALS.IS_ADMIN)!;
    return (storedUserName === userName && storedPassword === password) || (!storedUserName && !storedPassword) || (JSON.parse(storedRole) === isAdmin);
  } 

  private checkLoginStatus(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate([PATHS.HOME]);
    }
  }

  private handleLogin(userName: string, password: string , isAdmin: boolean): void {
    if (!localStorage.getItem(USER_CREDENTIALS.USER_NAME) && !localStorage.getItem(USER_CREDENTIALS.PASSWORD) && !localStorage.getItem(USER_CREDENTIALS.IS_ADMIN) ) {
      localStorage.setItem(USER_CREDENTIALS.USER_NAME, userName);
      localStorage.setItem(USER_CREDENTIALS.PASSWORD, password);
      localStorage.setItem(USER_CREDENTIALS.IS_ADMIN, isAdmin.toString());
    }
  
    this.authService.login();;
    this.router.navigate([PATHS.HOME]);
  }

  private handleInvalidLogin(): void {
    this.notificationService.showError(MESSAGES.INVALID_USERNAME_OR_PASSWORD);
    this.authService.logout();
    this.router.navigate([PATHS.EMPTY]);
  }

  private validateFormFields(): void {
    if (this.loginFormControls[USER_CREDENTIALS.USER_NAME]?.errors?.['required']) {
      this.notificationService.showError(MESSAGES.USERNAME_IS_REQUIRED);
    }
    if (this.loginFormControls[USER_CREDENTIALS.PASSWORD]!.errors?.['required']) {
      this.notificationService.showError(MESSAGES.PASSWORD_IS_REQUIRED);
    }
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

}
