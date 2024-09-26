import { Component, OnInit } from '@angular/core';
import { from, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit {
  private dataObservable$!: Observable<number>;
  public menuObservable$!: Observable<string[]>;
  public itemList: number[] = [];
  public menuItems: string[] = [];

  constructor() {
    this.initializeDataObservable();
  }

  ngOnInit(): void {
    this.subscribeToDataObservable();
    this.setupMenuObservable();
  }

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

  private setupMenuObservable(): void {
    this.menuObservable$ = new Observable<string[]>(subscriber => {
      const menuList = ['Burger', 'Pasta'];
      subscriber.next(menuList);
      subscriber.complete();
    });

    // Optional: Subscribe to the menu observable directly
    this.menuObservable$.subscribe({
      next: (menuItems: string[]) => {
        this.menuItems = menuItems;
        console.log('Menu Items:', this.menuItems);
      },
      complete: () => {
        console.log('Menu Observable completed');
      },
      error: (error) => {
        console.error('Error in menu observable:', error);
      }
    });
  }
  
}
