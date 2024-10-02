import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PATHS } from '../constants/routes.constants';
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const authService = inject(AuthService)
  const isLoggedIn = authService.isLoggedIn();
  let isAdmin = authService.isAdmin();
  if (!isLoggedIn) {
    router.navigate([PATHS.AUTH.LOGIN])
    return false;
  }
  else if (!isAdmin && route.routeConfig?.path !== PATHS.AUTH.HOME) {
    router.navigate([PATHS.SLASH])
    return false;
  }
  return true;

};
