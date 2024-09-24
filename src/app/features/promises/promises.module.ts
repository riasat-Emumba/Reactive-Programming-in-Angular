import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromisesRoutingModule } from './promises-routing.module';
import { PromiseDashboardComponent } from './components/promise-dashboard/promise-dashboard.component';
import { PromiseComponent } from './components/promise/promise.component';
import { AsyncawaitComponent } from './components/asyncawait/asyncawait.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    PromiseDashboardComponent,
    PromiseComponent,
    AsyncawaitComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    PromisesRoutingModule
  ]
})
export class PromisesModule { }
