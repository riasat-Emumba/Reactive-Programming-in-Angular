import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseDashboardComponent } from './components/promise-dashboard/promise-dashboard.component';
import { PromiseComponent } from './components/promise/promise.component';
import { AsyncawaitComponent } from './components/asyncawait/asyncawait.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'promise-dashboard', pathMatch: 'full'
  },
  {
    path: '', component: PromiseDashboardComponent, children: [
      {
        path: 'promise', component: PromiseComponent
      },
      {
        path: 'asyncawait', component: AsyncawaitComponent
      },
      
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromisesRoutingModule { }
