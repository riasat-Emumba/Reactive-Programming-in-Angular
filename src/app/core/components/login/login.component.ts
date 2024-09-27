import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MESSAGES, PATHS } from '../../constants/constants';
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
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { userName, password } = this.loginForm.value;
      this.processLogin(userName, password);
    } else {
      this.validateFormFields();
    }
  }

  private processLogin(userName: string, password: string): void {
    if (this.isLoginSuccessful(userName, password)) {
      this.handleLogin(userName, password);
    } else {
      this.handleInvalidLogin();
    }
  }

  private isLoginSuccessful(userName: string, password: string): boolean {
    const storedUserName = localStorage.getItem('userName');
    const storedPassword = localStorage.getItem('password');
    return (storedUserName === userName && storedPassword === password) || (!storedUserName && !storedPassword);
  }

  private checkLoginStatus(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate([PATHS.HOME]);
    }
  }

  private handleLogin(userName: string, password: string): void {
    if (!localStorage.getItem('userName') && !localStorage.getItem('password')) {
      localStorage.setItem('userName', userName);
      localStorage.setItem('password', password);
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
    if (this.loginFormControls['userName']?.errors?.['required']) {
      this.notificationService.showError(MESSAGES.USERNAME_IS_REQUIRED);
    }
    if (this.loginFormControls['password']!.errors?.['required']) {
      this.notificationService.showError(MESSAGES.PASSWORD_IS_REQUIRED);
    }
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

}
