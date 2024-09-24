import { Component, OnInit } from '@angular/core';
import { map, Observable, Observer, of, tap } from 'rxjs';
import { IUser } from '../../models/userinterface';
import { UserService } from '../../services/user.service';
import { PREMIUM_MEMBERSHIP } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  originalUsers$!: Observable<IUser[]>;
  transformedUsers$!: Observable<any[]>;

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.initializeUserData();
    this.transformedData();
  }


  private initializeUserData(): void {
    this.originalUsers$ = this.userService.getUsers();
    // console.log(this.originalUsers$);
  }

  // Example 1
  transformedData() {
    this.transformedUsers$ = this.originalUsers$.pipe(
      map(users => users.map(user => {
        return user.firstname === 'Alice' ? { ...user, firstname: 'Micheal' } : user;
      })),
      tap(users => {
        console.log('Transformed Users:', users);
      })
    );
  }

  // Example 2
  // private transformedData() {
  //   this.transformedUsers$ = this.originalUsers$.pipe(
  //     map(users => users.map((user: any) => ({
  //       id: user.id,
  //       fullName: `${user.firstname} ${user.lastname}`,
  //       discount: user.membershiplevel ===  PREMIUM_MEMBERSHIP ? '20%' : '0%',
  //       membershipLevel: user.membershiplevel
  //     })
  //     )
  //     )
  //   );
  // }

}
