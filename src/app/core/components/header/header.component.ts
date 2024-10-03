import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MESSAGES } from '../../constants/messages.constants';
import { PATHS } from '../../constants/routes.constants';

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
    this.router.navigate([PATHS.DASHBOARDS.PROMISE]);
  }

  navigateToHome() {
    this.router.navigate([PATHS.AUTH.HOME]);
  }

  navigateToRxjsDashboard() {
    this.router.navigate([PATHS.DASHBOARDS.RXJS]);
  }

  goBack() {
    const currentUrl = this.router.url;
    const urlSegments = currentUrl
      .split(PATHS.SLASH)
      .filter((segment) => segment);

    if (urlSegments.length > 1) {
      urlSegments.pop();
      const newUrl = PATHS.SLASH + urlSegments.join(PATHS.SLASH);
      this.router.navigate([newUrl]);
    } else {
      this.router.navigate([PATHS.AUTH.HOME]);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
