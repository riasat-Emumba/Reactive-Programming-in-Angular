import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/iuser';
import { firstValueFrom, flatMap, map, Observable, pluck, tap } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  userObservable$! : Observable<IUser[]>;
  users: IUser[] = [];
  userNames : string[] = [];
  constructor(private apiService: ApiService){
  }

  ngOnInit(): void {
    this.getUserObjects();
    this.getUsersAsPromise();
    // this.fetchUsersAsPromise();
  }

  getUsersAsPromise() {
    this.apiService.getUsersAsPromise().then((value) => {
      console.log(value);
      this.users = value;
    }).catch((error) => {
      console.error('Error fetching users:', error);
    } );
  }

  async fetchUsersAsPromise() {
    try {
      const users = await firstValueFrom(this.apiService.getUsers());
      console.log(users); 
      this.users = users;
    } catch (error) {
      console.error('Error fetching users:', error); 
    }
  }

  getUserObjects() {
    this.userObservable$ = this.apiService.getUsers();
    this.userObservable$.pipe(
      // tap((value) => console.log(value)),
      flatMap((users) => {
        // console.log(users);
        return users.map((user) => {
            return user;
        })            
      }),
      pluck('firstname')
    ).subscribe((value: any) => {
      console.log(value);
      this.userNames.push(value);
    })
  }

}
