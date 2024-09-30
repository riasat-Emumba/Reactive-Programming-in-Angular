import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { MessageStorageService } from '../../services/message-storage.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnDestroy {

  private broadcastSubscription!: Subscription;
  public videoList: string[] = [];
  public publishedVideoCount: number = 0;

  constructor(private messageStorageService: MessageStorageService) {
    this.startBroadcast();  
  }

  private startBroadcast(): void {
    const broadcastInterval$ = interval(2000);
    this.broadcastSubscription = broadcastInterval$.subscribe({
      next: (count) => this.publishVideo(count),
      error: (err) => console.error('Broadcast error:', err),
      complete: () => console.log('Broadcast complete')
    });
  }

  private publishVideo(count: number): void {
    const videoMessage = `Video ${count + 1}`;
    this.publishedVideoCount = count + 1;
    this.messageStorageService.addData(videoMessage, this.videoList);
    if (this.publishedVideoCount >= 5) {
      this.stopBroadcast();
    }
  }

  private stopBroadcast(): void {
    if (this.broadcastSubscription) {
      this.broadcastSubscription.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    this.stopBroadcast();
  }
  
}
