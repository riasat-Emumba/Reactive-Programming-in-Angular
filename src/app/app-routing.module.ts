import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { ContentComponent } from './core/components/content/content.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: ContentComponent, canActivate: [authGuard] },
  { path: 'promise-dashboard', loadChildren: () => import('./features/promises/promises.module').then(m => m.PromisesModule) },
  { path: 'rxjs-dashboard', loadChildren: () => import('./features/rxjs-operators/rxjs-operators.module').then(m => m.RxjsOperatorsModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
