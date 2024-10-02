import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, fromEvent, pluck, map, catchError, zip, forkJoin, } from 'rxjs';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})

export class ZipComponent {

  // nameOptions = ["Ali", "Ahmed", "Kashif", "Nasir", "Noman"];
  // colorOptions = ['red', 'green', 'blue', 'yellow', 'black', 'orange', 'purple', 'pink', 'brown', 'gray'];
  nameOptions = ["Ali", "Ahmed", "Kashif"];
  colorOptions = ['red', 'green', 'blue', 'yellow'];

  @ViewChild('name') nameSelect!: ElementRef<HTMLSelectElement>;
  @ViewChild('color') colorSelect!: ElementRef<HTMLSelectElement>;

  ngAfterViewInit(): void {
    this.initializeZipOperator();
    this.initializeForkJoinOperator();
  }

  private nameChangeEvent(): Observable<string> {
    return fromEvent<Event>(this.nameSelect.nativeElement, 'change').pipe(
      pluck('target', 'value'),
      map(value => value as string),
      catchError(error => {
        console.error('Error in nameChangeEvent:', error);
        return []; // Return an empty array for handling errors
      })
    );
  }

  private colorChangeEvent(): Observable<string> {
    return fromEvent<Event>(this.colorSelect.nativeElement, 'change').pipe(
      map(event => (event.target as HTMLSelectElement).value),
      catchError(error => {
        console.error('Error in colorChangeEvent:', error);
        return []; // Return an empty array for handling errors
      })
    );
  }

  private initializeForkJoinOperator(): void {
    forkJoin([this.nameChangeEvent(), this.colorChangeEvent()]).subscribe({
      next: ([name, color]) => {
        console.log(name, color);
        this.createBox(name, color, 'forkJoinContainer');
      },
      error: (err) => {
        console.error('Error in forkJoinOperator:', err);
      }
    });
  }

  private initializeZipOperator(): void {
    zip(this.nameChangeEvent(), this.colorChangeEvent()).subscribe({
      next: ([name, color]) => {
        console.log(name, color);
        this.createBox(name, color, 'zipContainer');
      },
      error: (err) => {
        console.error('Error in zipOperator:', err);
      }
    });
  }

  private createBox(name: string, color: string, containerId: string): void {
    const boxElement = document.createElement('div');
    boxElement.innerText = name;
    boxElement.style.backgroundColor = color;
    boxElement.style.color = 'white';
    boxElement.style.padding = '10px';
    boxElement.style.margin = '5px';
    boxElement.style.borderRadius = '5px';
    boxElement.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
    boxElement.style.display = 'inline-block';
    boxElement.style.fontSize = '16px';
    boxElement.style.fontWeight = 'bold';
    document.getElementById(containerId)?.appendChild(boxElement);
  }

}
