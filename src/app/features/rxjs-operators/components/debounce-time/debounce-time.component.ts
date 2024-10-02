import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';


@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements AfterViewInit {

  private subscriptions = new Subscription();
  @ViewChild('searchInput1') searchInput1!: ElementRef;
  @ViewChild('searchInput2') searchInput2!: ElementRef;

  ngAfterViewInit(): void {
    this.subscriptions.add(this.setupSearchInput1());
    this.subscriptions.add(this.setupSearchInput2());
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  private setupSearchInput1(): void {
    const searchTerm$: Observable<Event> = fromEvent(this.searchInput1.nativeElement, 'input');

    searchTerm$.pipe(
      map((event: Event) => (event.target as HTMLInputElement).value),
      debounceTime(700)
    ).subscribe({
      next: (value) => {
        console.log('Input 1:', value);
      },
      error: (err) => {
        console.error('Error occurred in Input 1:', err);
      },
    });
  }

  private setupSearchInput2(): void {
    const searchTerm$: Observable<Event> = fromEvent(this.searchInput2.nativeElement, 'input');

    searchTerm$
      .pipe(
        map((event: Event) => (event.target as HTMLInputElement).value),
        debounceTime(800),
        distinctUntilChanged()
      ).subscribe({
        next: (value) => {
          console.log('Input 2:', value);
        },
        error: (err) => {
          console.error('Error occurred in Input 2:', err);
        },
      });
  }

}
