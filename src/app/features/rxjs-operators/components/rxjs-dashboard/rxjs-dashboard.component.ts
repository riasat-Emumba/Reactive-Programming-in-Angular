import { Component, OnInit } from '@angular/core';
import { IOperator } from 'src/app/shared/model/ioperator';

@Component({
  selector: 'app-rxjs-dashboard',
  templateUrl: './rxjs-dashboard.component.html',
  styleUrls: ['./rxjs-dashboard.component.scss']
})
export class RxjsDashboardComponent implements OnInit {
  
  operators: IOperator[] = [];

  ngOnInit(): void {
    this.initializeOperators();
  }

  private initializeOperators(): void {
    this.operators = [
      { name: 'Of-from', link: '/rxjs-dashboard/of-from' },
      { name: 'FromEvent', link: '/rxjs-dashboard/fromevent' },
      { name: 'Timer', link: '/rxjs-dashboard/timer' },
      { name: 'Interval', link: '/rxjs-dashboard/interval' },
      { name: 'Custom-observable', link: '/rxjs-dashboard/custom-observable' },
      { name: 'To-array', link: '/rxjs-dashboard/to-array' },
      { name: 'Map', link: '/rxjs-dashboard/map' },
      { name: 'ConcatMap', link: '/rxjs-dashboard/concat-map' },
      { name: 'SwitchMap', link: '/rxjs-dashboard/switchmap' },
      { name: 'MergeMap', link: '/rxjs-dashboard/merge-map' },
      { name: 'ExhaustMap', link: '/rxjs-dashboard/exhaust-map' },
      { name: 'Pluck', link: '/rxjs-dashboard/pluck' },
      { name: 'Filter', link: '/rxjs-dashboard/filter' },
      { name: 'Retry', link: '/rxjs-dashboard/retry' },
      { name: 'Concat', link: '/rxjs-dashboard/concat' },
      { name: 'Merge', link: '/rxjs-dashboard/merge' },
      { name: 'Compare Maps', link: '/rxjs-dashboard/compare-maps' },
      { name: 'DebounceTime', link: '/rxjs-dashboard/debounce-time' },
      { name: 'Map Practical Examples', link: '/rxjs-dashboard/map-in-action' },
      { name: 'Share-Reply', link: '/rxjs-dashboard/share-reply' },
      { name: 'Combine Latest', link: '/rxjs-dashboard/combine-latest' },
      { name: 'Zip & ForkJoin', link: '/rxjs-dashboard/zip-fork-join' },
      { name: 'CatchError', link: '/rxjs-dashboard/catch-error' },
      // Add more operators as needed
    ];
  }

}
