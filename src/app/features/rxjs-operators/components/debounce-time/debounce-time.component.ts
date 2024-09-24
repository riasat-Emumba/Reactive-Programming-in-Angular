import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {
@ViewChild("searchInput") searchInput! : ElementRef

ngOnInit(): void {

}


ngAfterViewInit(): void {
  this.searchData()
}

searchData(){
  const searchTerm$ = fromEvent(this.searchInput.nativeElement, "input");
  console.log(searchTerm$);
  searchTerm$.pipe(
    map( (event:any) => event.target.value),
    debounceTime(500), distinctUntilChanged()
  ).
  subscribe({
    next: ((value) =>{
      console.log(value);
      
    }),error:(err =>{
      console.log(err);
      
    })
  })
}


}
