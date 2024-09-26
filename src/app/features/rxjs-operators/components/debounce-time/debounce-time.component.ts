import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, Observable } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements AfterViewInit {
  @ViewChild('searchInput1') searchInput1!: ElementRef;
  @ViewChild('searchInput2') searchInput2!: ElementRef;

  ngAfterViewInit(): void {
    this.setupSearchInput1();
    this.setupSearchInput2();
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
