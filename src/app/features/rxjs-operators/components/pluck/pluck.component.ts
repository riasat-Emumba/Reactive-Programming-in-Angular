import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/iuser';
import { map, Observable, pluck } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { MessageStorageService } from '../../services/message-storage.service';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  userObservable$! : Observable<IUser[]>;
  constructor(private msgStorageService: MessageStorageService){
  }

  ngOnInit(): void {
    // this.getUserObjects();
  }

  // getUserObjects() {
  //   this.userObservable$ = this.msgStorageService.getUserObjects();
  //   this.userObservable$.pipe(
  //     pluck('firstname')
  //   ).subscribe((value) =>{
  //     console.log(value);
  //   })
  // }


}
