import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { catchError, combineLatest, fromEvent, map, Observable, pluck, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit, AfterViewInit {
  nameSource = ["Ali", "Ahmed", "Kashif", "Nasir", "Noman"];
  colorSource = ['red', 'green', 'blue', 'yellow', 'black', 'orange', 'purple', 'pink', 'brown', 'gray'];

  @ViewChild('name') name!: ElementRef <HTMLSelectElement>;
  @ViewChild('color') color!: ElementRef <HTMLSelectElement>;

  constructor(){}

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.combineLatestOperator();
    this.withLatestFromOperator();
  }

  nameEvent(): Observable<string> {
    return fromEvent<Event>(this.name.nativeElement, 'change').pipe(
      pluck('target', 'value'),
      map(value => value as string),
      catchError(error => {
        console.error('Error in nameEvent:', error);
        return [];
      })
    );
  }

  colorEvent(): Observable<string> {
    return fromEvent<Event>(this.color.nativeElement, 'change').pipe(
      map(event => (event.target as HTMLSelectElement).value),
      catchError(error => {
        console.error('Error in colorEvent:', error);
        return [];
      })
    );
  }

  withLatestFromOperator(): void {
      this.nameEvent().pipe(
        withLatestFrom(this.colorEvent())
      ).subscribe(([name,color]) => {
        console.log(name, color);
        this.createBox(name, color, 'withLatestFromContainer');
      })
  }
  
  combineLatestOperator(): void {
    combineLatest([this.nameEvent(), this.colorEvent()]).subscribe({
      next: ([name, color]) => {
        console.log(name, color);
        this.createBox(name, color, 'combineLatestContainer');
        // this.createBox(name, color, 'withLatestFromContainer');
      },
      error: (error) => {
        console.error('Error in combineLatestOperator:', error);
      }
    });
  }

  createBox(name: string, color: string, containerId: string) {
    let el = document.createElement('div');
    el.innerText = name;
    el.style.backgroundColor = color;
    el.style.color = 'white';
    el.style.padding = '10px';
    el.style.margin = '5px';
    el.style.borderRadius = '5px';
    el.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
    el.style.display = 'inline-block';
    el.style.fontSize = '16px';
    el.style.fontWeight = 'bold';
    document.getElementById(containerId)?.appendChild(el);
  }

}
