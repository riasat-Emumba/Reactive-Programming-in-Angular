import { Component, OnInit } from '@angular/core';
import { map, Observable, Observer, of, tap } from 'rxjs';
import { IUser } from '../../models/userinterface';
import { UserService } from '../../services/user.service';
import { PREMIUM_MEMBERSHIP } from 'src/app/core/constants/constants';

interface ITransformedUser {
  id: number;
  fullName: string;
  discount: string;
  membershipLevel: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})


export class MapComponent implements OnInit {
  originalUsers$!: Observable<IUser[]>;
  transformedUsers$!: Observable<ITransformedUser[]>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.initializeUserData();
    this.transformUserData();
  }

  private initializeUserData(): void {
    this.originalUsers$ = this.userService.getUsers();
  }

  private transformUserData(): void {
    this.transformedUsers$ = this.originalUsers$.pipe(
      map(users => users.map(user => this.transformUser(user))),
      tap(users => console.log('Transformed Users:', users))
    );
  }

  private transformUser(user: IUser): ITransformedUser {
    return {
      id: user.id,
      fullName: `${user.firstname} ${user.lastname}`,
      discount: user.membershiplevel === PREMIUM_MEMBERSHIP ? '20%' : '0%',
      membershipLevel: user.membershiplevel
    };
  }
}




