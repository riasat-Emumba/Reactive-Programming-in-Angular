import { Component, OnInit } from '@angular/core';
import { delay, from, map, mergeAll, mergeMap, Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { SUPER_USER, USER } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss'],
})
export class MergeMapComponent implements OnInit {
  userListForMap: any[] = [];
  userListForMapAndMergeAll: any[] = [];
  userListForMergeMap: any[] = [];

  constructor(private userService: UserService) {}
  
  ngOnInit(): void {
    // this.example1UsingMap();
    // this.example2UsingMapAndMergeAll();
    this.example3UsingMergeMap();
  }

  // The map operator is used to transform the values emitted by an observable.
  // In the example below, we have an array of user types and we want to get the list of users for each user type.
  // We are using the map operator to transform the user type to an observable of users.
  example1UsingMap() {
    const source = ['User', 'Admin', 'Student', 'Teacher'];
    // map each value to an Observable
    from(source)
      .pipe(map((userType) => this.getUserByUserType(userType)))
      .subscribe((data) => {
        data.subscribe((data) => console.log(data));
        // data is observable here
        // this.userListForMap = [...this.userListForMap,  ...data ];
      });
  }

  // We can use mergeAll to flatten the observable of observables into a single observable.
  // mergeAll subscribes to the observables emitted by the source observable and emits the values emitted by those observables
  example2UsingMapAndMergeAll() {
    const source = ['User', 'Admin', 'Student', 'Teacher'];
    // map each value to an Observable
    from(source)
      .pipe(
        map((user) => {
          return this.getUserByUserType(user);
        }),
        mergeAll()
      )
      .subscribe((data) => {
        console.log(data);
        // this.userListForMapAndMergeAll = [...this.userListForMapAndMergeAll, ...data]
      });
  }

  example3UsingMergeMap() {
    const source = ['Admin', 'User', 'Student', 'Teacher'];
    // map each value to an Observable
    from(source)
      .pipe(
        mergeMap((userType) => {
          return this.getUserByUserType(userType);
        })
      )
      .subscribe((data) => {
        console.log(data);
        this.userListForMergeMap = [...this.userListForMergeMap, ...data];
      });
  }

  getUserByUserType(userType: string): Observable<any> {
    if (userType == USER) {
      return this.userService.getUsers().pipe(delay(5000));
    } else if (userType === SUPER_USER) {
      return this.userService.getSuperUsers();
    }
    return new Observable();
  }
}
