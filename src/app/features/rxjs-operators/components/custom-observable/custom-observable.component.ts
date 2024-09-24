import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit {
  private dataObservable$!: Observable<number>;
  menuObservable$!: Observable<string[]>;
  itemList: number[] = [];
  menuItems: string[] = [];
  constructor() {
    this.initializeDataObservable();
  }

  ngOnInit(): void {
    this.subscribeToDataObservable();
    this.setupMenuObservable();
    // this.setupMenuObserver();
  }

  private setupMenuObservable(): void {
    this.menuObservable$ = new Observable<string[]>(subscriber => {
      let menuList = ["Burger", "Pasta"]
      subscriber.next(menuList);
      subscriber.complete();
    });
  }

  // private setupMenuObserver(): void {
  //   const observer: Observer<string[]> = {
  //     next: (menuItem) => {
  //       console.log('Menu Item:', menuItem);
  //       this.menuItems = menuItem; 
  //     },
  //     error: (error) => {
  //       console.error('Error in menu observable:', error);
  //     },
  //     complete: () => {
  //       console.log("Menu Observable completed");
  //     }
  //   };
  //   this.subscribeToMenuObservable(observer)
  // }

  // private subscribeToMenuObservable(observer: Observer<string[]>): void {
  //   this.menuObservable$.subscribe(observer);
  // }

  private initializeDataObservable(): void {
    this.dataObservable$ = new Observable<number>(subscriber => {
      // Emit values from 0 to 100 in increments of 10
      for (let i = 0; i <= 100; i += 10) {
        subscriber.next(i);
      }
      subscriber.complete();
    });
  }

  private subscribeToDataObservable(): void {
    this.dataObservable$.subscribe({
      next: (value: number) => {
        this.itemList.push(value);
        console.log('Data value:', value);
      },
      complete: () => {
        console.log('Data Observable completed');
      },
      error: (err: any) => {
        console.error('Error occurred in data Observable:', err);
      }
    });
  }
}
