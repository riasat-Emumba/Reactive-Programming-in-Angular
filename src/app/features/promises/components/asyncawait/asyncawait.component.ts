import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DellLaptop } from '../../models/dell';

@Component({
  selector: 'app-async-await',
  templateUrl: './asyncawait.component.html',
  styleUrls: ['./asyncawait.component.scss']
})
export class AsyncawaitComponent implements OnInit {

  @ViewChild('div1') div1!: ElementRef<HTMLDivElement>;
  @ViewChild('div2') div2!: ElementRef<HTMLDivElement>;
  @ViewChild('div3') div3!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    // Uncomment to test initial async-await concepts
    // console.log(this.getRandomString());
    // this.logPromiseResult();
  }

  // Fetch data using Promise
  fetchDataWithPromise(): void {
    this.setDivText(this.div1, 'Fetching...');
    this.getLaptopDataPromise().then(laptop => {
      this.setDivText(this.div1, JSON.stringify(laptop));
    });
  }

  // Fetch data using async-await
  async fetchDataWithAsyncAwait(): Promise<void> {
    this.setDivText(this.div2, 'Fetching...');
    const laptopData: DellLaptop = await this.getLaptopDataPromise();
    this.setDivText(this.div2, JSON.stringify(laptopData));
  }

  // Fetch data from an API using Promises
  // fetchPosts(): void {
  //   this.setDivText(this.div3, 'Fetching...');
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(response => response.json())
  //     .then(posts => {
  //       this.setDivText(this.div3, JSON.stringify(posts));
  //     })
  //     .catch(error => {
  //       console.error('Error fetching posts:', error);
  //       this.setDivText(this.div3, 'Error fetching posts');
  //     });
  // }

  // Fetch data from an API using AsyncAwait
  async fetchPosts(): Promise<void> {
    this.setDivText(this.div3, 'Fetching...');
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const posts = await response.json();
      this.setDivText(this.div3, JSON.stringify(posts));
    } catch (error) {
      console.error('Error fetching posts:', error);
      this.setDivText(this.div3, 'Error fetching posts');
    }
  }

  // Private method to get laptop data using a promise
  private getLaptopDataPromise(): Promise<DellLaptop> {
    const dellLaptop: DellLaptop = {
      brand: 'Dell',
      harddisk: '2 TB',
      color: 'white'
    };

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dellLaptop);
      }, 2000);
    });
  }

  // Utility method to set inner text for divs
  private setDivText(div: ElementRef<HTMLDivElement>, text: string): void {
    div.nativeElement.innerText = text;
  }

  // Example for getting a random string
  getRandomString(): string {
    return "Hello from Component";
  }

  // Example for logging the promise result
  private async logPromiseResult(): Promise<void> {
    const result: string = await this.getPromise();
    console.log(result);
  }

  // Example for returning a promise
  async getPromise(): Promise<string> {
    return 'Hello From Promise';
  }
}
