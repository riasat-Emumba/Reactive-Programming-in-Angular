import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { IUser } from '../../models/iuser';
import { UserRole } from 'src/app/core/constants/constants';
import { ApiService } from '../../services/api.service';
import { ITransformedUser } from '../../models/itransformed-user';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public originalUsers$!: Observable<IUser[]>;
  public transformedUsers$!: Observable<ITransformedUser[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadUserData(); 
  }

  private loadUserData(): void {
    this.initializeUserData();
    this.transformUserData();
  }

  private initializeUserData(): void {
    this.originalUsers$ = this.apiService.getUsers();
  }

  private transformUserData(): void {
    this.transformedUsers$ = this.originalUsers$.pipe(
      map(users => users.map(user => this.transformUser(user))),
      tap(transformed => console.log('Transformed Users:', transformed))
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
