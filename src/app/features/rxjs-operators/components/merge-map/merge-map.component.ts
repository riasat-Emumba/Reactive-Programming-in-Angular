import { Component, OnInit } from '@angular/core';
import { delay, from, map, mergeAll, mergeMap, Observable } from 'rxjs';
import { USER_ROLES, UserRole } from 'src/app/core/constants/constants';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss'],
})
export class MergeMapComponent implements OnInit {
  userListWithMap: any[] = [];
  userListWithMapAndMergeAll: any[] = [];
  userListWithMergeMap: any[] = [];

  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void {
    // this.fetchUsersWithMap();
    // this.fetchUsersWithMapAndMergeAll();
    this.fetchUsersWithMergeMap();
  }

  private fetchUsersWithMap(): void {
    from(USER_ROLES)
      .pipe(map((userType) => this.getUsersByUserType(userType)))
      .subscribe((userObservable) => {
        userObservable.subscribe((userData) => {
          console.log(userData);
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
      });
  }

  private fetchUsersWithMergeMap(): void {
    from(USER_ROLES)
      .pipe(
        mergeMap((userType) => this.getUsersByUserType(userType))
      )
      .subscribe((userData) => {
        console.log(userData);
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
