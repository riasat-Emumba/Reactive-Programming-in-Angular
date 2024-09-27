import { Component, OnInit } from '@angular/core';
import { map, Observable, Observer, of, tap } from 'rxjs';
import { IUser } from '../../models/iuser';
import {  UserRole } from 'src/app/core/constants/constants';
import { ApiService } from '../../services/api.service';

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

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.initializeUserData();
    this.transformUserData();
  }

  private initializeUserData(): void {
    this.originalUsers$ = this.apiService.getUsers();
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
      discount: user.membershiplevel === UserRole.PREMIUM_MEMBERSHIP ? '20%' : '0%',
      membershipLevel: user.membershiplevel
    };
  }
}




