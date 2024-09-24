import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MesageService } from '../../services/mesage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  message: string = 'Welcome'
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private messageService: MesageService) { }
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

  private checkLoginStatus(): void {
    if (this.authService.isLoggedIn()) {
      // this.ngZone.run(() => {
      this.router.navigate(['home']);
      // });
    }
  }

  onLogin(): void {
    this.authService.login();
  }

  onLogout(): void {
    this.authService.logout();
  }

  navigateToHome(): void {
    this.router.navigate(['home']);
  }

  get loginFormControls() {
    return this.loginForm.controls;
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

  private handleLogin(userName: string, password: string): void {
    if (!localStorage.getItem('userName') && !localStorage.getItem('password')) {
      localStorage.setItem('userName', userName);
      localStorage.setItem('password', password);
    }
    // console.log('Login successful!', { userName, password });
    this.onLogin();
    this.navigateToHome();
  }

  private handleInvalidLogin(): void {
    console.error('Invalid username or password');
    this.onLogout();
    this.router.navigate(['']);
  }

  private validateFormFields(): void {
    if (this.loginFormControls['userName']?.errors?.['required']) {
      console.error('User Name is required');
    }
    if (this.loginFormControls['password']!.errors?.['required']) {
      console.error('Password is required');
    }
  }

}
