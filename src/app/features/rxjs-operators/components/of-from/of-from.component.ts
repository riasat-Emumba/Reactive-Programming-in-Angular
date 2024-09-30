import { Component, OnInit } from '@angular/core';
import { from, interval, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent implements OnInit {

  laptopCompanies: string[] = [];
  processorCompanies: string[] = [];
  purchaseMessage: string = '';

  ngOnInit(): void {
    this.demonstrateOfOperator();
    this.demonstrateFromOperator();
    this.convertPromiseToObservable();
    this.createPurchasePromise();
  }

  private demonstrateFromOperator(): void {
    const numberArray = [{ a: 10 }, { b: 20 }, { c: 30 }, { d: 40 }, { e: 50 }];
    const numberArray$ = from(numberArray);
    
    numberArray$.subscribe({
      next: (value) => console.log(value),
      error: (error) => console.error('Error:', error),
      complete: () => console.log('From operator completed'),
    });
  }

  private demonstrateOfOperator(): void {
    const numberArray = [{ a: 10 }, { b: 20 }, { c: 30 }, { d: 40 }, { e: 50 }];
    const numberArray$ = of(...numberArray); // Spread operator to emit each object separately
    
    numberArray$.subscribe({
      next: (value) => console.log(value),
      error: (error) => console.error('Error:', error),
      complete: () => console.log('Of operator completed'),
    });
  }

  private createPurchasePromise(): Promise<string> {
    this.purchaseMessage = 'Purchasing....';
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Car has been purchased');
      }, 5000);
    });
  }

  // Convert promise to observable
  private convertPromiseToObservable(): void {
    const purchasePromise$ = from(this.createPurchasePromise());
    
    purchasePromise$.subscribe({
      next: (value: string) => {
        this.purchaseMessage = value;
      },
      error: (error) => console.error('Error:', error),
    });
  }

  private demonstrateOfOperatorWithCompanies(): void {
    const laptopCompaniesString = 'HP, Dell, Lenovo';
    const laptopCompanies$ = of(laptopCompaniesString);
    
    laptopCompanies$.subscribe({
      next: (company) => this.laptopCompanies.push(company),
      error: (error) => console.error('Error:', error),
      complete: () => console.log('Of operator with companies completed'),
    });
  }

  private demonstrateFromOperatorWithProcessors(): void {
    const processorCompanies = ['Intel', 'IBM', 'Apple'];
    const processorCompanies$ = from(processorCompanies);
    
    processorCompanies$.subscribe({
      next: (company) => this.processorCompanies.push(company),
      error: (error) => console.error('Error:', error),
      complete: () => console.log('From operator with processors completed'),
    });
  }

}
