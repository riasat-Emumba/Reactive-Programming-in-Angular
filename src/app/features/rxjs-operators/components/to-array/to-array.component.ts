import { Component, OnInit } from '@angular/core';
import { interval, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  sourceSubscription!: Subscription;

  ngOnInit(): void {
    this.withoutToArray();
    this.withToArray();
  }

  useInterval() {
    const source = interval(1000);
    return source;
  }

  withoutToArray() {
    const source = this.useInterval();
    this.sourceSubscription = source.pipe(
      take(10),
    ).subscribe((val) => {
      console.log("withOutToArray : ", val);

    })

  }

  withToArray() {
    const source = this.useInterval();
    this.sourceSubscription = source.pipe(
      take(10),
      toArray()
    ).subscribe((val) => {
      console.log("withToArray : ", val);

    })
  }

}
