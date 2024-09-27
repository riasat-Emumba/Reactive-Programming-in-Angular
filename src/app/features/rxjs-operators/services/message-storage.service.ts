import { Injectable } from '@angular/core';
import { IUser } from '../models/iuser';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageStorageService {

  constructor() { }

  private dataArray: string[] = [];

  addData(msg: string, array: string[]): void {
    this.dataArray = [...array, msg];
  }

  getData(): string[] {
    return this.dataArray;
  }

}
