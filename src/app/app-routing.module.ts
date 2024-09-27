import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { ContentComponent } from './core/components/content/content.component';
import { authGuard } from './core/guards/auth.guard';
import { PATHS } from './core/constants/constants';


const routes: Routes = [
  { path: PATHS.LOGIN, component: LoginComponent },
  { path: PATHS.HOME, component: ContentComponent, canActivate: [authGuard] },
  { path: PATHS.PROMISE_DASHBOARD, loadChildren: () => import('./features/promises/promises.module').then(m => m.PromisesModule) },
  { path: PATHS.RXJS_DASHBOARD, loadChildren: () => import('./features/rxjs-operators/rxjs-operators.module').then(m => m.RxjsOperatorsModule) },
  { path: PATHS.WILDCARD, redirectTo: PATHS.LOGIN, pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
