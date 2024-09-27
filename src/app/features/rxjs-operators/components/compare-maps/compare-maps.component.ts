import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { from, map, concatMap, delay, mergeMap, of, switchMap } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-compare-maps',
  templateUrl: './compare-maps.component.html',
  styleUrls: ['./compare-maps.component.scss']
})
export class CompareMapsComponent {

  videoListForMap: string[] = [];
  videoListForMergeMap: string[] = [];
  videoListForConcatMap: string[] = [];
  videoListForSwitchMap: string[] = [];
  private channelSource: string[] = ['Tech', 'Comedy', 'News'];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // Uncomment the method you want to test
    // this.example1UsingMap();
    this.executeMergeMap();
    this.executeConcatMap();
    this.executeSwitchMap();

  }

  // Example using map operator
  // By using map we can get the data but for that we need to subscribe twice
  // example1UsingMap(): void {
  //   const source = ['Tech', 'Comedy', 'News'];
  //   from(source)
  //     .pipe(
  //       map(channelGenre => this.getChannelData(channelGenre))
  //     ).subscribe(data =>{
  //       // console.log(data);
  //       // this.videoListForMap.push(data);
  //     }) 
  // }

  // Centralized method to get data based on channel genre

  getChannelData(channel: string): Observable<string> {
    switch (channel) {
      case 'Tech':
        return this.apiService.getTechData(channel);
      case 'News':
        return this.apiService.getNewsData(channel);
      case 'Comedy':
        return this.apiService.getComedyData(channel);
      default:
        return of('Unknown Genre').pipe(delay(1000));
    }
  }

  // Example using mergeMap operator
  executeMergeMap(): void {
    from(this.channelSource)
      .pipe(
        mergeMap(channel => this.getChannelData(channel))
      )
      .subscribe({
        next: data => {
          console.log("MergeMap: ", data);
          this.videoListForMergeMap.push(data);
        },
        error: err => console.error('MergeMap Error:', err)
      });
  }

  // Example using concatMap operator
  executeConcatMap(): void {
    from(this.channelSource)
      .pipe(
        concatMap(channel => this.getChannelData(channel))
      )
      .subscribe({
        next: data => {
          console.log("ConcatMap: ", data);
          this.videoListForConcatMap.push(data);
        },
        error: err => console.error('ConcatMap Error:', err)
      });
  }

  // Example using switchMap operator
  executeSwitchMap(): void {
    from(this.channelSource)
      .pipe(
        switchMap(channel => this.getChannelData(channel))
      )
      .subscribe({
        next: data => {
          console.log("SwitchMap: ", data);
          this.videoListForSwitchMap.push(data);
        },
        error: err => console.error('SwitchMap Error:', err)
      });
  }



}




