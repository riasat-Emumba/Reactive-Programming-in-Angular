import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsOperatorsRoutingModule } from './rxjs-operators-routing.module';
import { RxjsDashboardComponent } from './components/rxjs-dashboard/rxjs-dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { FromeventComponent } from './components/fromevent/fromevent.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { SwitchmapComponent } from './components/switchmap/switchmap.component';
import { MapComponent } from './components/map/map.component';
import { IntervalComponent } from './components/interval/interval.component';
import { TimerComponent } from './components/timer/timer.component';
import { OfFromComponent } from './components/of-from/of-from.component';
import { ToArrayComponent } from './components/to-array/to-array.component';
import { CustomObservableComponent } from './components/custom-observable/custom-observable.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PluckComponent } from './components/pluck/pluck.component';
import { FilterComponent } from './components/filter/filter.component';
import { RetryComponent } from './components/retry/retry.component';
import { DebounceTimeComponent } from './components/debounce-time/debounce-time.component';
import { ConcatComponent } from './components/concat/concat.component';
import { MergeComponent } from './components/merge/merge.component';
@NgModule({
  declarations: [
    RxjsDashboardComponent,
    FromeventComponent,
    SwitchmapComponent,
    MapComponent,
    IntervalComponent,
    TimerComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    UserDetailComponent,
    PluckComponent,
    FilterComponent,
    RetryComponent,
    DebounceTimeComponent,
    ConcatComponent,
    MergeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatGridListModule,
    RxjsOperatorsRoutingModule
  ]
})
export class RxjsOperatorsModule { }
