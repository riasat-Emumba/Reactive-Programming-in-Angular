import { Component, OnInit } from '@angular/core';
import { interval, Subject, Subscription, take, takeUntil, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  private subscription: Subject<void> = new Subject<void>();
  // private subscription = new Subscription();

  ngOnInit(): void {
    this.withoutToArray();
    this.withToArray();
  }

  withoutToArray() {
    const source = interval(1000)
    source.pipe(
      take(10), takeUntil(this.subscription)
    ).subscribe((val) => {
      console.log("withOutToArray : ", val);
    })
    // toArray() will convert the observable to array when the source observable completes
    // this.subscription.add(
    //   source.pipe(
    //     take(10),
    //   ).subscribe((val) => {
    //     console.log("withOutToArray : ", val);
    //   })
    // )
  }

  withToArray() {
    const source = interval(1000)
    source.pipe(
      take(10), takeUntil(this.subscription),
      toArray()
    ).subscribe((val) => {
      console.log("withToArray : ", val);
    })
  }

  ngOnDestroy(): void {
    this.subscription.next();
    this.subscription.complete();
  }
}
