import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concatMap, delay, exhaustMap, from, fromEvent, interval, of, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit, AfterViewInit {
  currentValue = 0;


  @ViewChild('incrementBtn') incrementBtn!: ElementRef;


  ngOnInit(): void {

    this.example(concatMap)();
  }

  ngAfterViewInit(): void {
    this.onIncrement();
  }

  example = (operator: any) => () => {
    from([0, 1, 2, 3, 4,])
      .pipe(operator((x: any) => of(x).pipe(delay(5000))))
      .subscribe(
        console.log,
        () => { },
        () => console.log(`${operator.name} complete`)
      )

  }


  onIncrement() {
    if (this.incrementBtn) {
      fromEvent(this.incrementBtn.nativeElement, 'click')

        .subscribe((data) => {
          console.log(data);


        });
    }
  }

}
