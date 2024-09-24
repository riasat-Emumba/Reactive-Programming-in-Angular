import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { ObservabledataService } from '../../services/observabledata.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit, OnDestroy {

  constructor(private observableDataService: ObservabledataService){}

  private broadCastSubscription!: Subscription;
  broadCastedVideoList:string[] = [];
  totalPublishedVideos: number = 0 ;
  ngOnInit(): void {
    this.startVideoBroadCast()
  }

  startVideoBroadCast() {
    const broadCastVideos$ = interval(2000);
    this.broadCastSubscription = broadCastVideos$.subscribe((data) => {
      let msgFromObservable = 'Video ' + ++data;
      this.totalPublishedVideos = data;
      this.observableDataService.addData(msgFromObservable, this.broadCastedVideoList)
      // Used to stop emitting more data after below condition is true
      if (data >= 5) {
        this.broadCastSubscription.unsubscribe();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.broadCastSubscription) {
      this.broadCastSubscription.unsubscribe();
    }
  }
}
