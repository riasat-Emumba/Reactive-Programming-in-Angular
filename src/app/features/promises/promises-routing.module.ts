import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseDashboardComponent } from './components/promise-dashboard/promise-dashboard.component';
import { PromiseComponent } from './components/promise/promise.component';
import { AsyncawaitComponent } from './components/asyncawait/asyncawait.component';
import { PROMISE } from 'src/app/core/constants/constants';

const routes: Routes = [

  { path: PROMISE.DASHBOARD, component: PromiseDashboardComponent },
  { path: PROMISE.PROMISE, component: PromiseComponent },
  { path: PROMISE.ASYNC_AWAIT, component: AsyncawaitComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromisesRoutingModule { }
