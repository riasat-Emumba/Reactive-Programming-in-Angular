import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/userinterface';
import { map, Observable, pluck } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  userObservable$! : Observable<IUser>;
  constructor(private userService: UserService){
  }

  ngOnInit(): void {
    this.getUserObjects();
  }

  getUserObjects() {
    this.userObservable$ = this.userService.getUserObjects();
    this.userObservable$.pipe(
      pluck('firstname')
    ).subscribe((value) =>{
      console.log(value);
    })
  }


}
