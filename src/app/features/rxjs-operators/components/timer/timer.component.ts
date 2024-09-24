import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ObservabledataService } from '../../services/observabledata.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  private broadCastSubscription!: Subscription;
  broadCastedVideoList: string[] = [];
  totalPublishedVideos: number = 0;

  constructor(private observableDataService: ObservabledataService) { }
  ngOnInit(): void {
    this.startVideoBroadCast();
  }

  startVideoBroadCast() {
    const broadCastVideos$ = timer(10000, 3000);
    this.broadCastSubscription = broadCastVideos$.subscribe((data) => {
      let msgFromObservable = 'Video ' + ++data;
      console.log(msgFromObservable);
      
      this.totalPublishedVideos = data;
      this.observableDataService.addData(msgFromObservable, this.broadCastedVideoList)
      // Used to stop emitting more data after below condition is true
      if (data >= 5) {
        this.broadCastSubscription.unsubscribe();
      }
    });
  }

}
