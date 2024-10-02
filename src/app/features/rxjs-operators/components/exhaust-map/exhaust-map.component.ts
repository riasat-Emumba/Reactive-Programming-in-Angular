import { Component, OnInit } from '@angular/core';
import { delay, exhaustMap, from, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit {

  private subscriptions = new Subscription();
  currentValue: any = 0;

  ngOnInit(): void {
    this.subscriptions.add(this.example(exhaustMap)());
    // this.subscriptions.add(this.example(concatMap)());
    // this.subscriptions.add(this.example(mergeMap)());
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  example = (operator: any) => () => {
    from([0, 1, 2, 3, 4,])
      .pipe(operator((x: any) => of(x).pipe(delay(1000))))
      .subscribe(data => {
        console.log(operator, data);
        this.currentValue = data;
      })
    // .subscribe(
    //   console.log,
    //   (val) => { this.currentValue = val  },
    //   () => console.log(`${operator.name} complete`)
    // );
  }


}
