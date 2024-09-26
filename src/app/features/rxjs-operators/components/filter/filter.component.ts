import { Component, OnInit } from '@angular/core';
import { filter, from, map, mergeMap, of, tap, toArray } from 'rxjs';
import { UserService } from '../../services/user.service';
import { ISuperUser } from '../../models/super-userinterface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  userDataByNameLength!: ISuperUser[];
  userDataByGender!: ISuperUser[];
  userDataByNthItem!: ISuperUser[];

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.filterById();
    // this.filterById1();
    this.filterByGender();
    this.filterByNthItem();
  }

  // filterById1() {
  //   this.userService.getSuperUsers().pipe(
  //   map(users => from(users)), 
  //   tap(data => console.log(data))
  // ).subscribe((data) => {
  //     console.log(data);
  //     // this.userDataByNameLength = data;
  //   });
  // }

  filterById() {
    this.userService.getSuperUsers().pipe(
      map(users => users.filter(user => user.id > 2)),
      tap(data => console.log(data)),
    ).subscribe((data) => {
      console.log(data);
      this.userDataByNameLength = data;
    });
  }

  filterByGender() {
    this.userService.getSuperUsers().pipe(
      map(users => users.filter(user => user.gender === "Male")),
    ).subscribe((data) => {
      this.userDataByGender = data;
    })
  }

  filterByNthItem() {
    this.userService.getSuperUsers().pipe(
      map(users => users.filter(user => user.id >= 4)),
    ).subscribe((data) => {
      this.userDataByNthItem = data;
    }
    )
  }

}
