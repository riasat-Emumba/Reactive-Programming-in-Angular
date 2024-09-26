import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, fromEvent, pluck, map, catchError, withLatestFrom, combineLatest, zip, forkJoin, take } from 'rxjs';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent {

  // nameSource = ["Ali", "Ahmed", "Kashif", "Nasir", "Noman"];
  nameSource = ["Ali", "Ahmed", "Kashif"];
  colorSource = ['red', 'green', 'blue', 'yellow'];
  // colorSource = ['red', 'green', 'blue', 'yellow', 'black', 'orange', 'purple', 'pink', 'brown', 'gray'];

  @ViewChild('name') name!: ElementRef <HTMLSelectElement>;
  @ViewChild('color') color!: ElementRef <HTMLSelectElement>;

  ngAfterViewInit(): void {
    this.zipOperator();
    this.forkJoinOperator();
  }
//  To implement the forkJoin operator we need to use take as it will complete the observable after 3 values, so that we can verify the forkJoin operator.
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

  forkJoinOperator(): void {
   forkJoin(this.nameEvent(), this.colorEvent()).subscribe(([name,color]) => {
      console.log(name, color);
      this.createBox(name, color, 'forkJoinContainer');
   }
  )
  }
  
  zipOperator(): void {
    zip(this.nameEvent(), this.colorEvent()).subscribe(([name,color]) =>{
      console.log(name,color);
      this.createBox(name, color, 'zipContainer');
    } )
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
