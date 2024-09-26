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
    this.coldObservableIsUnicastExample();
    this.hotObservableIsMulticastExample();
  }

  coldObservableIsUnicastExample(){
    // Cold Observable because data is generated inside the observable. We can make this hot by moving data generation outside the observable.
    const observable = Observable.create((observer:any) => {
      observer.next(Math.random());
  });
  
  // subscription 1
  observable.subscribe((data:any) => {
    console.log(data); 
  });
  
  // subscription 2
  observable.subscribe((data:any) => {
     console.log(data); 
  });
  }

  hotObservableIsMulticastExample(){
    const randomNumber = Math.random();
    // Hot Observable because data is generated outside the observable. And each subscriber gets the same data. Which means hot observable is multicast.
    const observable = Observable.create((observer:any) => {
      observer.next(randomNumber);
  });
  
  // subscription 1
  observable.subscribe((data:any) => {
    console.log(data); 
  });
  
  // subscription 2
  observable.subscribe((data:any) => {
     console.log(data);   
  });
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
