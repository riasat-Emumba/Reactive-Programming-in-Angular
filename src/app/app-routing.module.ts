import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { ContentComponent } from './core/components/content/content.component';
import { authGuard } from './core/guards/auth.guard';
import { PATHS } from './core/constants/constants';
import { CustomPreloadingStrategy } from './core/services/custom-preloading.service';


const routes: Routes = [
  { path: PATHS.LOGIN, component: LoginComponent },
  { path: PATHS.HOME, component: ContentComponent, canActivate: [authGuard] },
  {
    path: PATHS.PROMISE_DASHBOARD,
    loadChildren: () => import('./features/promises/promises.module').then(m => m.PromisesModule), data: { preload: false }
  },
  {
    path: PATHS.RXJS_DASHBOARD,
    loadChildren: () => import('./features/rxjs-operators/rxjs-operators.module').then(m => m.RxjsOperatorsModule), data: { preload: true },
    canActivate: [authGuard]
  },
  { path: PATHS.WILDCARD, redirectTo: PATHS.LOGIN, pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
