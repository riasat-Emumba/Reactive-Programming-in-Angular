import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { ContentComponent } from './core/components/content/content.component';
import { authGuard } from './core/guards/auth.guard';
import { CustomPreloadingStrategy } from './core/services/custom-preloading.service';
import { PATHS } from './core/constants/routes.constants';


const routes: Routes = [
  { path: PATHS.AUTH.LOGIN, component: LoginComponent },
  { path: PATHS.AUTH.HOME, component: ContentComponent, canActivate: [authGuard] },
  {
    path: PATHS.DASHBOARDS.PROMISE,
    loadChildren: () => import('./features/promises/promises.module').then(m => m.PromisesModule), data: { preload: true }
  },
  {
    path: PATHS.DASHBOARDS.RXJS,
    loadChildren: () => import('./features/rxjs-operators/rxjs-operators.module').then(m => m.RxjsOperatorsModule), data: { preload: true },
    canActivate: [authGuard]
  },
  { path: PATHS.WILDCARD, redirectTo: PATHS.AUTH.LOGIN, pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
