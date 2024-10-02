import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseDashboardComponent } from './components/promise-dashboard/promise-dashboard.component';
import { PromiseComponent } from './components/promise/promise.component';
import { AsyncawaitComponent } from './components/asyncawait/asyncawait.component';
import { PROMISE_ROUTES } from 'src/app/core/constants/routes.constants';

const routes: Routes = [

  { path: PROMISE_ROUTES.DASHBOARD, component: PromiseDashboardComponent },
  { path: PROMISE_ROUTES.PROMISE, component: PromiseComponent },
  { path: PROMISE_ROUTES.ASYNC_AWAIT, component: AsyncawaitComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromisesRoutingModule { }
