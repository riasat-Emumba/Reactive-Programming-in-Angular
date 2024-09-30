import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, takeUntil, timer } from 'rxjs';
import { MessageStorageService } from '../../services/message-storage.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  private broadCastSubscription!: Subscription;
  private onDestroy$=  new Subject<void>();
  broadCastedVideoList: string[] = [];
  totalPublishedVideos: number = 0;

  constructor(private messageStorageService: MessageStorageService) { }

  ngOnInit(): void {
    this.startVideoBroadCast();
  }

  startVideoBroadCast() {
    const broadCastVideos$ = timer(1000, 3000);
    this.broadCastSubscription = broadCastVideos$.pipe(
      takeUntil(this.onDestroy$),
    ).subscribe((data) => {
      let msgFromObservable = 'Video ' + ++data;
      console.log(msgFromObservable);
      
      this.totalPublishedVideos = data;
      this.messageStorageService.addData(msgFromObservable, this.broadCastedVideoList)
      // Used to stop emitting more data after below condition is true
      // if (data >= 5) {
      //   this.broadCastSubscription.unsubscribe();
      // }
    });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
