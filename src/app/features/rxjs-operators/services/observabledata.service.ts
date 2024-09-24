import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservabledataService {
  
  private dataArray :string [] = []
  constructor() { }

  addData(msg: string, array: string[]){
    this.dataArray =  array;
    this.dataArray.push(msg)
  }

  getData(){
    return this.dataArray;
  }
  
}
