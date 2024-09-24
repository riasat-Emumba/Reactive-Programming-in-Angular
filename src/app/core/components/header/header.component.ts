import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title : string  = ''
  isLoggedIn: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.userLoggedIn()
  }

  userLoggedIn() {
    this.authService.loggedIn$.subscribe(loggedIn => {
      console.log(loggedIn);
      this.isLoggedIn = loggedIn;
      this.title = !loggedIn ? 'Welcome' : 'Async Architecture'
    });
  }

  logOut() {
    this.authService.logout();
    this.router.navigate([''])
  }

  navigateToPromiseDashboard() {
    this.router.navigate(['promise-dashboard']);
  }

  navigateToHome() {
    this.router.navigate(['home']);
  }

  navigateToRxjsDashboard() {
    this.router.navigate(['rxjs-dashboard']);
  }

}
