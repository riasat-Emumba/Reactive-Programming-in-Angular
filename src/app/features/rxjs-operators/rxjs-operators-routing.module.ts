import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsDashboardComponent } from './components/rxjs-dashboard/rxjs-dashboard.component';
import { FromeventComponent } from './components/fromevent/fromevent.component';
import { MapComponent } from './components/map/map.component';
import { SwitchmapComponent } from './components/switchmap/switchmap.component';
import { IntervalComponent } from './components/interval/interval.component';
import { TimerComponent } from './components/timer/timer.component';
import { OfFromComponent } from './components/of-from/of-from.component';
import { ToArrayComponent } from './components/to-array/to-array.component';
import { CustomObservableComponent } from './components/custom-observable/custom-observable.component';
import { PluckComponent } from './components/pluck/pluck.component';
import { FilterComponent } from './components/filter/filter.component';
import { RetryComponent } from './components/retry/retry.component';
import { DebounceTimeComponent } from './components/debounce-time/debounce-time.component';
import { ConcatComponent } from './components/concat/concat.component';
import { MergeComponent } from './components/merge/merge.component';

const routes: Routes = [
  { path: '', component: RxjsDashboardComponent },
  { path: 'fromevent', component: FromeventComponent },
  { path: 'map', component: MapComponent },
  { path: 'switchmap', component: SwitchmapComponent },
  { path: 'interval', component: IntervalComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'of-from', component: OfFromComponent },
  { path: 'to-array', component: ToArrayComponent },
  { path: 'custom-observable', component: CustomObservableComponent },
  { path: 'pluck', component: PluckComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'retry', component: RetryComponent },
  { path: 'debounce-time', component: DebounceTimeComponent },
  { path: 'concat', component: ConcatComponent },
  { path: 'merge', component: MergeComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsOperatorsRoutingModule { }
