import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeadersharingService {

  constructor() { }

  private dataSubject = new BehaviorSubject<string>('');
  currentData = this.dataSubject.asObservable();

  sendData(data: any) {
    this.dataSubject.next(data);
  }

}
