import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromisesRoutingModule } from './promises-routing.module';
import { PromiseDashboardComponent } from './components/promise-dashboard/promise-dashboard.component';
import { PromiseComponent } from './components/promise/promise.component';
import { AsyncawaitComponent } from './components/asyncawait/asyncawait.component';


@NgModule({
  declarations: [
    PromiseDashboardComponent,
    PromiseComponent,
    AsyncawaitComponent
  ],
  imports: [
    CommonModule,
    PromisesRoutingModule
  ]
})
export class PromisesModule { }
