import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { MessageStorageService } from '../../services/message-storage.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit, OnDestroy {

  private broadcastSubscription!: Subscription;
  videoList: string[] = [];
  publishedVideoCount: number = 0;

  constructor(private messageStorageService: MessageStorageService) {}

  ngOnInit(): void {
    this.startBroadcast();
  }

  private startBroadcast(): void {
    const broadcastInterval$ = interval(2000);
    this.broadcastSubscription = broadcastInterval$.subscribe((count) => {
      const videoMessage = `Video ${count + 1}`;
      this.publishedVideoCount = count + 1;
      this.messageStorageService.addData(videoMessage, this.videoList);

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
