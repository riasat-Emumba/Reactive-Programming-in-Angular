import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/iuser';
import { flatMap, map, Observable, pluck, tap } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  userObservable$! : Observable<IUser[]>;
  constructor(private apiService: ApiService){
  }

  ngOnInit(): void {
    this.getUserObjects();
  }

  getUserObjects() {
    this.userObservable$ = this.apiService.getUsers();
    this.userObservable$.pipe(
      tap((value) => console.log(value)),
      flatMap((users) => {
        console.log(users);
        return users.map((user) => {
            return user;
        })
      }),
      pluck('firstname')
    ).subscribe((value) =>{
      console.log(value);
    })
  }

}
