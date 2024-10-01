import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PATHS } from '../constants/constants';

export const authGuard: CanActivateFn = (route, state) => {
  console.log(state);

  const router = inject(Router)
  const authService = inject(AuthService)
  const isLoggedIn = authService.isLoggedIn();
  let isAdmin = authService.isAdmin();
  if (!isLoggedIn) {
    router.navigate([PATHS.LOGIN])
    return false;
  }
  else if (isAdmin && route.routeConfig?.path !== PATHS.HOME) {
    router.navigate([PATHS.SLACH])
    return false;
  }
  return true;

};
