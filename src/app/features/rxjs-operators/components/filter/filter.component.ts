import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  userDataByNameLength: any;
  userDataByGender: any;
  userDataByNthItem: any;
  dataArray:any [] = [
    { id: 1, name: "Ali", gender : "Male" },
    { id: 2, name: "Ayesha", gender : "Female" },
    { id: 3, name: "Awais", gender : "Male" },
    { id: 4, name: "Zohaib", gender : "Male" },
    { id: 5, name: "Naqash", gender : "Male" },
    { id: 6, name: "Zarnab", gender : "Female" },
  ]
  ngOnInit(): void {
    this.filterById();
    this.filterByGender();
    this.filterByNthItem();
  }


  
  filterByNthItem(){
    const source = from(this.dataArray);

    source.pipe(
      filter((user) => user.id >=4 ),
      toArray()
    ).subscribe((data) => {
        this.userDataByNthItem = data;
    })
  }
  
  filterByGender(){
    const source = from(this.dataArray);

    source.pipe(
      filter((user) => user.gender  === "Male" ),
      toArray()
    ).subscribe((data) => {
        this.userDataByGender = data;
    })
  }

  filterById(){
    const source = from(this.dataArray);

    source.pipe(
      filter((user) => user.name.length  > 5 ),
      toArray()
    ).subscribe((data) => {
        this.userDataByNameLength = data;
    })
  }
}
