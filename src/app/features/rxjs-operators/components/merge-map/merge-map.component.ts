import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { delay, map, mergeAll, mergeMap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { USER_ROLES } from 'src/app/core/constants/categories.constants';
import { UserRole } from 'src/app/core/constants/user.constants';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss'],
})
export class MergeMapComponent implements OnInit {

  userListWithMap: any[] = [];
  userListWithMapAndMergeAll: any[] = [];
  userListWithMergeMap: any[] = [];
  userRoles = USER_ROLES;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchUsersWithMap();
    this.fetchUsersWithMapAndMergeAll();
    this.fetchUsersWithMergeMap();
  }

  private fetchUsersWithMap(): void {
    from(USER_ROLES)
      .pipe(map((userType) => this.getUsersByUserType(userType)))
      .subscribe((userObservable) => {
        userObservable.subscribe((userData) => {
          // console.log(userData);
          this.userListWithMap.push(...userData);
        });
      });
  }

  private fetchUsersWithMapAndMergeAll(): void {
    from(USER_ROLES)
      .pipe(
        map((userType) => this.getUsersByUserType(userType)),
        mergeAll()
      )
      .subscribe((userData) => {
        console.log(userData);
        this.userListWithMapAndMergeAll.push(...userData);
      });
  }

  private fetchUsersWithMergeMap(): void {
    from(USER_ROLES)
      .pipe(
        mergeMap((userType) => this.getUsersByUserType(userType))
      )
      .subscribe((userData) => {
        // console.log(userData);
        this.userListWithMergeMap.push(...userData);
      });
  }

  private getUsersByUserType(userType: string): Observable<any> {
    switch (userType) {
      case UserRole.USER:
        return this.apiService.getUsers().pipe(delay(5000));
      case UserRole.SUPER_USER:
        return this.apiService.getSuperUsers();
      default:
        return new Observable();
    }
  }

}
