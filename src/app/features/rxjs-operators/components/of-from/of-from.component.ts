import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
  laptopCompaniesList: string[] = [];
  processorCompaniesList: string[] = [];
  messageFrompromise:string = ""

  ngOnInit(): void {
    this.ofOperatorExample();
    this.fromOperatorExample();
    this.promiseToObservable()
    this.createPromise()
  }

  createPromise() {
    this.messageFrompromise = "Purchasing...."
    const buyCar =  new Promise((resolve) => {
      setTimeout(() => {
        let msg = "Car has been purchased"
        resolve(msg)
      }, 5000);
    });
    return buyCar;
  }

  promiseToObservable() {
    const buyCar = from(this.createPromise());
    console.log(buyCar);
    buyCar.subscribe({
      next:((value:any)  => {
        this.messageFrompromise = value;
      })
    })
  }

  ofOperatorExample() {
    let laptopPrices = [25000, 30000]
    let laptopCompanies = "hp, Dell, Lenovo";
    // Second Example
    // let randomData = [laptopCompanies, 30, 100, laptopPrices];
    const laptopCompanies$ = of(laptopCompanies)
    laptopCompanies$.subscribe({
      next: (val: any) => {
        this.laptopCompaniesList.push(val)
      }, error: (error) => {
        console.log(error);
      }, complete: () => {
        console.log("Of is completed");
      }
    });
  }

  fromOperatorExample() {
    let processorCompanies = ['intel', 'IBM', 'Apple'];
    const processorCompanies$ = from(processorCompanies)
    processorCompanies$.subscribe({
      next: (val) => {
        this.processorCompaniesList.push(val)
      }, error: (error) => {
        console.log(error);
      }, complete: () => {
        console.log("From is completed");
      }
    });
  }

}
