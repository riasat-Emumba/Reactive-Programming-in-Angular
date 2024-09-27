import { Component, OnInit } from '@angular/core';
import { from, map, mergeMap, concatMap, Observable, delay, of, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit {
  videoListForMap: string[] = [];
  videoListForSwitchAll: string[] = [];
  videoListForSwitchMap: string[] = [];

  constructor() { }

  ngOnInit(): void {
    // Uncomment the method you want to test
    // this.example1UsingMap();
    // this.example2UsingMapAndSwitchALL();
    this.example3UsingSwitchMap();
  }

  // Example using map operator
  example1UsingMap(): void {
    const source = ['Tech', 'Comedy', 'News'];
    from(source)
      .pipe(
        map(channelGenre => this.getDataByChannelName(channelGenre))
      ).subscribe((data$) => {
        data$.subscribe(newData => {
          // console.log("Map data: ", newData);
          this.videoListForMap.push(newData);
        });
      });
  }

  // Example using SwitchAll operator
  example2UsingMapAndSwitchALL(): void {
    const source = ['Tech', 'Comedy', 'News'];
    from(source)
      .pipe(
        map(channelGenre => this.getDataByChannelName(channelGenre)), switchAll()
      ).subscribe(data => {
        console.log("switchAll: ", data);
        this.videoListForSwitchAll.push(data);
      });
  }

  // Example using concatMap operator
  example3UsingSwitchMap(): void {
    const source = ['Tech', 'Comedy', 'News'];
    from(source)
      .pipe(
        switchMap(channelGenre => this.getDataByChannelName(channelGenre))
      )
      .subscribe((data) => {
        console.log("concatMap: ", data);
        this.videoListForSwitchMap.push(data);
      });
  }

  getDataByChannelName(channel: string){
    return of( channel + ' Video Uploaded').pipe(delay(1000));
    }

}
