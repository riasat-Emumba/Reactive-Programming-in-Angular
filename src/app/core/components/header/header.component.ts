import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MESSAGES, PATHS } from '../../constants/constants';
import { NotificationService } from '../../services/notification.service';
import { Subscription } from 'rxjs';
import { MatCardLgImage } from '@angular/material/card';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  welcomeMsg = MESSAGES.WELCOME;
  projectName = MESSAGES.PROJECT_NAME;
  isLoggedIn: boolean = false;
  private subscription!: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userLoggedIn();
  }

  userLoggedIn() {
    this.subscription = this.authService.loggedIn$.subscribe((value) => {
      this.isLoggedIn = value;
    });
  }

  logOut() {
    this.authService.logout();
    this.router.navigate([PATHS.EMPTY]);
  }

  navigateToPromiseDashboard() {
    this.router.navigate([PATHS.PROMISE_DASHBOARD]);
  }

  navigateToHome() {
    this.router.navigate([PATHS.HOME]);
  }

  navigateToRxjsDashboard() {
    this.router.navigate([PATHS.RXJS_DASHBOARD]);
  }

  goBack() {
    const currentUrl = this.router.url;
    const urlSegments = currentUrl
      .split(PATHS.SLACH)
      .filter((segment) => segment);

    if (urlSegments.length > 1) {
      urlSegments.pop();
      const newUrl = PATHS.SLACH + urlSegments.join(PATHS.SLACH);
      this.router.navigate([newUrl]);
    } else {
      this.router.navigate([PATHS.HOME]);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
