import { Component, OnInit } from '@angular/core';


interface Operator {
  name: string;
  link: string;
}

@Component({
  selector: 'app-rxjs-dashboard',
  templateUrl: './rxjs-dashboard.component.html',
  styleUrls: ['./rxjs-dashboard.component.scss']
})
export class RxjsDashboardComponent implements OnInit {
  operators: Operator[] = [];

  ngOnInit(): void {
    this.operators = [
      { name: 'Of-from', link: '/rxjs-dashboard/of-from' },
      { name: 'fromevent', link: '/rxjs-dashboard/map' },
      { name: 'Timer', link: '/rxjs-dashboard/timer' },
      { name: 'Interval', link: '/rxjs-dashboard/interval' },
      { name: 'Custom-observable', link: '/rxjs-dashboard/custom-observable' },
      { name: 'to-array', link: '/rxjs-dashboard/to-array' },
      { name: 'Map', link: '/rxjs-dashboard/map' },
      { name: 'ConcatMap', link: '/rxjs-dashboard/concat-map' },
      { name: 'SwitchMap', link: '/rxjs-dashboard/switchmap' },
      { name: 'MergeMap', link: '/rxjs-dashboard/merge-map' },
      { name: 'Exhaust-map', link: '/rxjs-dashboard/exhaust-map' },
      { name: 'Pluck', link: '/rxjs-dashboard/pluck' },
      { name: 'Filter', link: '/rxjs-dashboard/filter' },
      { name: 'Retry', link: '/rxjs-dashboard/retry' },
      { name: 'Concat', link: '/rxjs-dashboard/concat' },
      { name: 'Merge', link: '/rxjs-dashboard/merge' },
      { name: 'Compare Maps', link: '/rxjs-dashboard/compare-maps' },
      { name: 'DebounceTime', link: '/rxjs-dashboard/debounce-time' },
      { name: 'Maps Practical Examples', link: '/rxjs-dashboard/map-in-action' },
      { name: 'Share-reply', link: '/rxjs-dashboard/share-reply' },
      { name: 'Combine-latest', link: '/rxjs-dashboard/combine-latest' },
      { name: 'Zip & ForkJoin', link: '/rxjs-dashboard/zip-fork-join' },
      // Add more operators as needed
    ];
  }

}
