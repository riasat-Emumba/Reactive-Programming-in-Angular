import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from '../../services/user.service';
import { from, map, concatMap, delay, mergeMap, of, switchMap } from 'rxjs';
import { USER, SUPER_USER } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-compare-maps',
  templateUrl: './compare-maps.component.html',
  styleUrls: ['./compare-maps.component.scss']
})
export class CompareMapsComponent {

  videoListForMap: any[] = [];
  videoListForMergeMap: any[] = [];
  videoListForConcatMap: any[] = [];
  videoListForSwitchMap: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Uncomment the method you want to test
    // this.example1UsingMap();
    this.example2UsingMergeMap();
    this.example3UsingConcatMap();
    this.example4UsingSwitchMap();
  }

  // Example using map operator
  // By using map we can get the dta but for that we need to subscribe twice
  // example1UsingMap(): void {
  //   const source = ['Tech', 'Comedy', 'News'];
  //   from(source)
  //     .pipe(
  //       map(channelGenre => this.getDataByChannelName(channelGenre))
  //     ).subscribe(data =>{
  //       // console.log(data);
  //       this.videoListForMap.push(data);
  //     }) 
  // }

  // Example using mergeMap operator
  example2UsingMergeMap(): void {
    const source = ['Tech', 'Comedy', 'News'];
    from(source)
      .pipe(
        mergeMap(channelGenre => {
          if(channelGenre === 'Tech') {
            return this.getTechData(channelGenre);
          } else if(channelGenre === 'News') {
            return this.getNewsData(channelGenre);
          } else {
            return this.getComedyData(channelGenre);
          }
        })
      )
      .subscribe(data => {
        console.log("MergeMap: ", data);
        this.videoListForMergeMap.push(data);
      });
  }

  // Example using concatMap operator
  example3UsingConcatMap(): void {
    const source = ['Tech', 'Comedy', 'News'];
    from(source)
      .pipe(
        concatMap(channelGenre => {
          if(channelGenre === 'Tech') {
            return this.getTechData(channelGenre);
          } else if(channelGenre === 'News') {
            return this.getNewsData(channelGenre);
          } else {
            return this.getComedyData(channelGenre);
          }
        })
      )
      .subscribe((data) => {
        console.log("concatMap: ", data);
        this.videoListForConcatMap.push(data);
      });
  }

    example4UsingSwitchMap(): void {
    const source = ['Tech', 'Comedy', 'News'];
    from(source)
      .pipe(
        switchMap(channelGenre => {
          if (channelGenre === 'Tech') {
            return this.getTechData(channelGenre);
          } else if (channelGenre === 'News') {
            return this.getNewsData(channelGenre);
          } else {
            return this.getComedyData(channelGenre);
          }
        })
      )
      .subscribe((data) => {
        console.log("switchMap: ", data);
        this.videoListForSwitchMap.push(data);
      });
  }


  // example4UsingSwitchMap(): void {
  //   const source = ['Tech', 'Comedy', 'News'];
  //   from(source)
  //     .pipe(
  //       switchMap(channelGenre => {
  //         if (channelGenre === 'Tech') {
  //           return this.getTechData(channelGenre);
  //         } else if (channelGenre === 'News') {
  //           return this.getNewsData(channelGenre);
  //         } else {
  //           return this.getComedyData(channelGenre);
  //         }
  //       })
  //     )
  //     .subscribe((data) => {
  //       console.log("switchMap: ", data);
  //       this.videoListForSwitchMap.push(data);
  //     });
  // }

  getDataByChannelName(channel: string) {
    return of(channel + ' Video Uploaded').pipe(delay(1000));
  }

  getTechData(channel: string) {
    return of(channel + ' Video Uploaded').pipe(delay(15000));
  }

  getNewsData(channel: string) {
    return of(channel + ' Video Uploaded').pipe(delay(5000));
  }

  getComedyData(channel: string) {
    return of(channel + ' Video Uploaded').pipe(delay(3000));
  }

  // Method to get user by user type
  // getUserByUserType(userType: string): Observable<any> {
  //   switch (userType) {
  //     case USER:
  //       return this.userService.getUsers().pipe(delay(5000));
  //     case SUPER_USER:
  //       return this.userService.getSuperUsers();
  //     default:
  //       return new Observable();
  //   }
  // }

}
