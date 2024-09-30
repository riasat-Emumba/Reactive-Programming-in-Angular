import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { ISuperUser } from '../../models/isuper-user';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public usersById!: ISuperUser[];
  public usersByGender!: ISuperUser[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadFilteredUsers();
  }

  private loadFilteredUsers(): void {
    this.filterById();
    this.filterByGender();

  }

  private filterById(): void {
    this.apiService.getSuperUsers().pipe(
      map(users => users.filter(user => user.id > 2)),
      tap(filteredUsers => console.log(filteredUsers))
    ).subscribe((data) => {
      this.usersById = data;
    });
  }

  private filterByGender(): void {
    this.apiService.getSuperUsers().pipe(
      map(users => users.filter(user => user.gender === 'Male')),
    ).subscribe((data) => {
      this.usersByGender = data;
    });
  }

}
