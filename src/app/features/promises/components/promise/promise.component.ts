import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PromiseService } from '../../services/promise.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent {
  constructor(private promiseService: PromiseService) {
  }
  // Srings
  promiseResultExample2: string = "Click Button to get data....";
  promiseResultExample1: string = "Looking for ";
  promiseResultExample3: string = "Click Button to get data....";
  promiseStateExample2: string = "Pending";
  promiseStateExample3: string = "Pending";
  laptopPurchased: string = "Buying laptop please wait ....";

  ngOnInit(): void {
    // Function Example
    this.buyLaptop()
  }

  buyLaptop() {
    let buyLaptop = new Promise((resolve, reject) => {
      if (!this.dellAvailable()) {
        return setTimeout(() => {
          resolve("Dell is purchased")
        }, 5000)
      } else if (this.hpAvailable()) {
        return setTimeout(() => {
          resolve("HP is purchased")
        }, 5000)
      } else {
        return setTimeout(() => {
          reject("Laptop is not available")
        }, 5000)
      }
    });

    buyLaptop.then((res: any) => {
      this.laptopPurchased = res;
      console.log(res);
    }).catch(e => {
      this.laptopPurchased = e;
      console.log(e);
    })
  }

  dellAvailable() {
    return true
  }

  hpAvailable() {
    return true
  }

  getAllUsers() {
    this.promiseResultExample2 = "Fetching Data";
    this.promiseService.getAllUsers().then((res) => {
      console.log(res);
      setTimeout(() => {
        if (res) {
          this.promiseStateExample2 = "Fulfilled";
          this.promiseResultExample2 = "Promise is resolved"
        }
      }, 5000)
    }).catch(error => {
      console.log(error);
      this.promiseStateExample2 = "Rejected";
      this.promiseResultExample2 = "Promise not resolved"
    })
  }

  getError() {
    this.promiseResultExample3 = "Fetching Data";
    this.promiseService.getError().catch(error => {
      setTimeout(() => {
        console.log(error);
        this.promiseStateExample3 = "Rejected";
        this.promiseResultExample3 = "Promise not resolved"
      }, 3000);
    })
  }
}
