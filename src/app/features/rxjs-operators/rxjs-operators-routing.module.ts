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
import { authGuard } from 'src/app/core/guards/auth.guard';
import { RXJS_ROUTES } from 'src/app/core/constants/routes.constants';

// Define route paths as constants


const routes: Routes = [

  // Approach 1: Lazy loading of feature module
  // {
  //   path: RXJS.DASHBOARD, component: RxjsDashboardComponent, canActivate:[authGuard], children: [
  //     { path: RXJS.FROM_EVENT, component: FromEventComponent },
  //   ]
  // },
  { path: RXJS_ROUTES.DASHBOARD, component: RxjsDashboardComponent },
  { path: RXJS_ROUTES.FROM_EVENT, component: FromEventComponent },
  { path: RXJS_ROUTES.MAP, component: MapComponent },
  { path: RXJS_ROUTES.SWITCH_MAP, component: SwitchmapComponent },
  { path: RXJS_ROUTES.INTERVAL, component: IntervalComponent },
  { path: RXJS_ROUTES.TIMER, component: TimerComponent },
  { path: RXJS_ROUTES.OF_FROM, component: OfFromComponent },
  { path: RXJS_ROUTES.TO_ARRAY, component: ToArrayComponent },
  { path: RXJS_ROUTES.CUSTOM_OBSERVABLE, component: CustomObservableComponent },
  { path: RXJS_ROUTES.PLUCK, component: PluckComponent },
  { path: RXJS_ROUTES.FILTER, component: FilterComponent },
  { path: RXJS_ROUTES.RETRY, component: RetryComponent },
  { path: RXJS_ROUTES.DEBOUNCE_TIME, component: DebounceTimeComponent },
  { path: RXJS_ROUTES.CONCAT, component: ConcatComponent },
  { path: RXJS_ROUTES.MERGE, component: MergeComponent },
  { path: RXJS_ROUTES.MERGE_MAP, component: MergeMapComponent },
  { path: RXJS_ROUTES.CONCAT_MAP, component: ConcatMapComponent },
  { path: RXJS_ROUTES.COMPARE_MAPS, component: CompareMapsComponent },
  { path: RXJS_ROUTES.MAPS_IN_ACTION, component: MapsInActionComponent },
  { path: RXJS_ROUTES.EXHAUST_MAP, component: ExhaustMapComponent },
  { path: RXJS_ROUTES.SHARE_REPLY, component: ShareReplyComponent },
  { path: RXJS_ROUTES.COMBINE_LATEST, component: CombineLatestComponent },
  { path: RXJS_ROUTES.ZIP, component: ZipComponent },
  { path: RXJS_ROUTES.CATCH_ERROR, component: CatchErrorComponent },
  { path: RXJS_ROUTES.WILDCARD, redirectTo: RXJS_ROUTES.DASHBOARD }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsOperatorsRoutingModule { }
