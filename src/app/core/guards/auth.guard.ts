import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PATHS } from '../constants/constants';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const authService = inject(AuthService)
  const isLoggedIn = authService.isLoggedIn();
  if (!isLoggedIn) {
    router.navigate([PATHS.LOGIN])
    return false;
  }
  return true;
};
