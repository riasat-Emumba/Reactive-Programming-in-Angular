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
import { MergeMapComponent } from './components/merge-map/merge-map.component';
import { ConcatMapComponent } from './components/concat-map/concat-map.component';
import { CompareMapsComponent } from './components/compare-maps/compare-maps.component';
import { MatCardModule } from '@angular/material/card';
import { MapsInActionComponent } from './components/maps-in-action/maps-in-action.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { ExhaustMapComponent } from './components/exhaust-map/exhaust-map.component';

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
    MergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
    CompareMapsComponent,
    MapsInActionComponent,
    ExhaustMapComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatFormFieldModule, 
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    RxjsOperatorsRoutingModule
  ]
})
export class RxjsOperatorsModule { }
