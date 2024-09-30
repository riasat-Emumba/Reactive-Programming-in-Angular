import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsDashboardComponent } from './components/rxjs-dashboard/rxjs-dashboard.component';
import { FromEventComponent } from './components/fromevent/fromevent.component';
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
import { MergeMapComponent } from './components/merge-map/merge-map.component';
import { ConcatMapComponent } from './components/concat-map/concat-map.component';
import { CompareMapsComponent } from './components/compare-maps/compare-maps.component';
import { MapsInActionComponent } from './components/maps-in-action/maps-in-action.component';
import { ExhaustMapComponent } from './components/exhaust-map/exhaust-map.component';
import { ShareReplyComponent } from './components/share-reply/share-reply.component';
import { CombineLatestComponent } from './components/combine-latest/combine-latest.component';
import { ZipComponent } from './components/zip/zip.component';
import { CatchErrorComponent } from './components/catch-error/catch-error.component';
import { RXJS } from 'src/app/core/constants/constants';

// Define route paths as constants


const routes: Routes = [
  { path: RXJS.DASHBOARD, component: RxjsDashboardComponent },
  { path: RXJS.FROM_EVENT, component: FromEventComponent },
  { path: RXJS.MAP, component: MapComponent },
  { path: RXJS.SWITCH_MAP, component: SwitchmapComponent },
  { path: RXJS.INTERVAL, component: IntervalComponent },
  { path: RXJS.TIMER, component: TimerComponent },
  { path: RXJS.OF_FROM, component: OfFromComponent },
  { path: RXJS.TO_ARRAY, component: ToArrayComponent },
  { path: RXJS.CUSTOM_OBSERVABLE, component: CustomObservableComponent },
  { path: RXJS.PLUCK, component: PluckComponent },
  { path: RXJS.FILTER, component: FilterComponent },
  { path: RXJS.RETRY, component: RetryComponent },
  { path: RXJS.DEBOUNCE_TIME, component: DebounceTimeComponent },
  { path: RXJS.CONCAT, component: ConcatComponent },
  { path: RXJS.MERGE, component: MergeComponent },
  { path: RXJS.MERGE_MAP, component: MergeMapComponent },
  { path: RXJS.CONCAT_MAP, component: ConcatMapComponent },
  { path: RXJS.COMPARE_MAPS, component: CompareMapsComponent },
  { path: RXJS.MAPS_IN_ACTION, component: MapsInActionComponent },
  { path: RXJS.EXHAUST_MAP, component: ExhaustMapComponent },
  { path: RXJS.SHARE_REPLY, component: ShareReplyComponent },
  { path: RXJS.COMBINE_LATEST, component: CombineLatestComponent },
  { path: RXJS.ZIP, component: ZipComponent },
  { path: RXJS.CATCH_ERROR, component: CatchErrorComponent },
  { path: RXJS.WILDCARD, redirectTo: RXJS.DASHBOARD }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsOperatorsRoutingModule { }
