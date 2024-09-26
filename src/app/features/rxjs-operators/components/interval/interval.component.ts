import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ObservabledataService } from '../../services/observabledata.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit, OnDestroy {

  private broadcastSubscription!: Subscription;
  videoList: string[] = [];
  publishedVideoCount: number = 0;

  constructor(private observableDataService: ObservabledataService) {}

  ngOnInit(): void {
    this.startBroadcast();
  }

  private startBroadcast(): void {
    const broadcastInterval$ = interval(2000);
    this.broadcastSubscription = broadcastInterval$.subscribe((count) => {
      const videoMessage = `Video ${count + 1}`;
      this.publishedVideoCount = count + 1;
      this.observableDataService.addData(videoMessage, this.videoList);

      if (this.publishedVideoCount >= 5) {
        this.broadcastSubscription.unsubscribe();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.broadcastSubscription) {
      this.broadcastSubscription.unsubscribe();
    }
  }


}
