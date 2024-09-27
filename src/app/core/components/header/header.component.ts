import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MESSAGES, PATHS } from '../../constants/constants';
import { NotificationService } from '../../services/notification.service';
import { Subscription } from 'rxjs';

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
  constructor(private authService: AuthService, private notificationService: NotificationService,
    private router: Router) {}

  ngOnInit() {
    this.userLoggedIn()
  }

  userLoggedIn() {
    this.subscription = this.authService.loggedIn$.subscribe({
      next: (loggedIn) => {
      this.isLoggedIn = loggedIn;
      },
      error: (err) => {
        this.notificationService.showError(err);
      }
    });
  }

  logOut() {
    this.authService.logout();
    this.router.navigate([PATHS.EMPTY]);
    this.subscription.unsubscribe();
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
    const urlSegments = currentUrl.split('/').filter(segment => segment);

    if (urlSegments.length > 1) {
      urlSegments.pop();
      const newUrl = '/' + urlSegments.join('/');
      this.router.navigate([newUrl]);
    } else {
      this.router.navigate([PATHS.HOME]);
    }
  }

}
