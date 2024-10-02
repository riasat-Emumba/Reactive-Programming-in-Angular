import { Component } from '@angular/core';
import { concatAll, concatMap, delay, from, map, Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { IUser } from '../../models/iuser';
import { USER_ROLES } from 'src/app/core/constants/categories.constants';
import { UserRole } from 'src/app/core/constants/user.constants';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent {

  userListForMap: IUser[] = [];
  userListForMapAndConcatAll: any[] = [];
  userListForConcatMap: any[] = [];
  users: string[] = USER_ROLES;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchUsersUsingMap();
    this.fetchUsersUsingMapAndConcatAll();
    this.fetchUsersUsingConcatMap();
  }

  fetchUsersUsingMap(): void {
    from(USER_ROLES)
      .pipe(
        map(userRole => this.getUserByRole(userRole)),
      )
      .subscribe(data => {
        console.log(data);
        // this.userListForMap.push(...data);
      });
  }

  fetchUsersUsingMapAndConcatAll(): void {
    from(USER_ROLES)
      .pipe(
        map(userRole => this.getUserByRole(userRole)),
        concatAll(), // Automatically subscribes to each inner observable in sequence
      )
      .subscribe(data => {
        console.log(data);
        this.userListForMapAndConcatAll.push(...data);
      });
  }

  fetchUsersUsingConcatMap(): void {
    from(USER_ROLES)
      .pipe(
        concatMap(userRole => this.getUserByRole(userRole)),
      )
      .subscribe(data => {
        console.log(data);
        this.userListForConcatMap.push(...data);
      });
  }

  private getUserByRole(userRole: string): Observable<any> {
    switch (userRole) {
      case UserRole.USER:
        return this.apiService.getUsers().pipe(delay(1000)); // Simulate delay
      case UserRole.SUPER_USER:
        return this.apiService.getSuperUsers();
      default:
        return new Observable();
    }
  }

}
