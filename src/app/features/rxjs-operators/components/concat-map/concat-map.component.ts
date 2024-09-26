import { Component } from '@angular/core';
import { concatAll, concatMap, delay, from, isObservable, map, mergeAll, mergeMap, Observable, tap, toArray } from 'rxjs';
import { USER, SUPER_USER } from 'src/app/core/constants/constants';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent {
  userListForMap: any[] = [];
  userListForMapAndConcatAll: any[] = [];
  userListForConcatMap: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.example1UsingMap();
    // this.example2UsingMapAndConcatAll();
    this.example3UsingConcatMap();
  }

  example1UsingMap() {
    const source = ['User', 'Admin', 'Student', 'Teacher'];
    const source1  = from (['User', 'Admin', 'Student', 'Teacher']);
    // map each value to an Observable
    from(source)
      .pipe(
        map(userType => this.getUserByUserType(userType))
      ).subscribe((data) => {
        console.log(data);
      }
      );
  }

  example2UsingMapAndConcatAll() {
    const source = ['User', 'Admin', 'Student', 'Teacher'];
    // map each value to an Observable
    from(source)
      .pipe(
        map((user) => {
          return this.getUserByUserType(user);
        }),
        concatAll(),
      )
      .subscribe((data) => {
        console.log(data);
        this.userListForMapAndConcatAll = [...this.userListForMapAndConcatAll, ...data]
      });
  }

  example3UsingConcatMap() {
    const source = ['User', 'Admin', 'Student', 'Teacher'];
    // map each value to an Observable
    from(source)
      .pipe(
        concatMap((userType) => {
          return this.getUserByUserType(userType);
        })
      )
      .subscribe((data) => {
        console.log(data); 
        this.userListForConcatMap = [...this.userListForConcatMap, ...data]
      });
  }

  getUserByUserType(userType: string): Observable<any> {
    if (userType == USER) {
      return this.userService.getUsers().pipe(delay(5000)
      );
    } else if (userType === SUPER_USER) {
      return this.userService.getSuperUsers();
    }
    return new Observable();
  }

}
