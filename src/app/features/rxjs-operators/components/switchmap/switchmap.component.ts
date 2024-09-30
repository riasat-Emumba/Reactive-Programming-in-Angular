import { Component, OnInit } from '@angular/core';
import { from, map, mergeMap, concatMap, Observable, delay, of, switchAll, switchMap, Subscription } from 'rxjs';
import { VideoCategory } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit {

  videoListForMap: string[] = [];
  videoListForSwitchAll: string[] = [];
  videoListForSwitchMap: string[] = [];
  private subscription = new Subscription();
  
  constructor() { }

  ngOnInit(): void {
    // Uncomment the method you want to test
    this.loadVideosUsingMap();
    this.loadVideosMapAndSwitchALL();
    this.loadVideosUsingSwitchMap();
  }

  // Example using map operator
  loadVideosUsingMap(): void {
    const source = from(Object.values(VideoCategory));
  source.pipe(
      map(channelGenre => this.getDataByChannelName(channelGenre))
    ).subscribe(data$ => {
      data$.subscribe(newData => {
        this.videoListForMap.push(newData);
      });
    });
  }

  // Example using SwitchAll operator
  loadVideosMapAndSwitchALL(): void {
    const source = from(Object.values(VideoCategory));
    source.pipe(
      map(channelGenre => this.getDataByChannelName(channelGenre)),
      switchAll()
    ).subscribe(data => {
      this.videoListForSwitchAll.push(data);
    });
  }

  // Example using SwitchMap operator
  loadVideosUsingSwitchMap(): void {
    const source = from(Object.values(VideoCategory));
    this.subscription = source.pipe(
      switchMap(channelGenre => this.getDataByChannelName(channelGenre))
    ).subscribe(data => {
      console.log(data);
      
      this.videoListForSwitchMap.push(data);
    });
  }

  private getDataByChannelName(channel: string): Observable<string> {
    return of(`${channel} Video Uploaded`).pipe(delay(3000));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
