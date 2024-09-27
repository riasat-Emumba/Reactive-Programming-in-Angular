import { Component, OnInit } from '@angular/core';
import { from, Observable, Observer, Subscription } from 'rxjs';

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
  private subscriptions: Subscription = new Subscription();
  
  constructor() {
    this.createDataObservable();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.subscribeToData());
    this.subscriptions.add(this.createMenuObservable());
    this.generateColdObservable();
    this.generateHotObservable();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  generateColdObservable() {
    const cold$ = new Observable<number>((observer) => {
      observer.next(Math.random()); // Unique value for each subscriber
      observer.complete();
    });
  
    // Subscription 1
    cold$.subscribe((value) => {
      console.log('Cold Observable - Subscription 1:', value); 
    });
  
    // Subscription 2
    cold$.subscribe((value) => {
      console.log('Cold Observable - Subscription 2:', value); 
    });
  }
  
  generateHotObservable() {
    const sharedValue = Math.random(); // Shared value across all subscribers
    const hot$ = new Observable<number>((observer) => {
      observer.next(sharedValue); // Same value for all subscribers
      observer.complete();
    });
  
    // Subscription 1
    hot$.subscribe((value) => {
      console.log('Hot Observable - Subscription 1:', value); 
    });
  
    // Subscription 2
    hot$.subscribe((value) => {
      console.log('Hot Observable - Subscription 2:', value);   
    });
  }
  
  private createDataObservable(): void {
    this.dataObservable$ = new Observable<number>(observer => {
      for (let i = 0; i <= 100; i += 10) {
        observer.next(i);
      }
      observer.complete();
    });
  }
  
  private subscribeToData(): void {
    this.dataObservable$.subscribe({
      next: (value) => {
        this.itemList.push(value);
        console.log('Emitted value:', value);
      },
      complete: () => {
        console.log('Data emission completed');
      },
      error: (error) => {
        console.error('Error in data emission:', error);
      }
    });
  }
  
  private createMenuObservable(): void {
    this.menuObservable$ = new Observable<string[]>(observer => {
      const menuList = ['Burger', 'Pasta'];
      observer.next(menuList);
      observer.complete();
    });
  
    this.menuObservable$.subscribe({
      next: (items) => {
        this.menuItems = items;
        console.log('Menu Items:', this.menuItems);
      },
      complete: () => {
        console.log('Menu emission completed');
      },
      error: (error) => {
        console.error('Error in menu emission:', error);
      }
    });
  }
  
  
}
