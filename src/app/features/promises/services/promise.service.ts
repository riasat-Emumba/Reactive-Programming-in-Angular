
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromiseService {

  constructor() { }

  getAllUsers() {
    let base_URL = "https://jsonplaceholder.typicode.com/posts";
    return fetch(base_URL).then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
  }

  getError() {
    let base_URL = "https://jsonplaceholder.typicode.com/posts"
    return fetch(base_URL).then(response => {
      console.log(response);
        throw new Error("Network response was not ok " + response.statusText);
    })
  }
}
