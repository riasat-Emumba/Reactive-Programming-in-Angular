import { Component, OnInit } from '@angular/core';
import { interval, map, merge, Observable, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {
  
  finalStreamData: string[] = [];
  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.getFinalObservableUsingMerge();
  }

  private getFinalObservableUsingMerge(): void {
    const techObs = this.getDataStream('TechVideo', 5);
    const comedyObs = this.getDataStream('ComedyVideo', 3);
    const newsObs = this.getDataStream('NewsVideo', 4);

    const finalObservable = merge(techObs, comedyObs, newsObs);

    // Store the subscription to unsubscribe later
    this.subscription.add(
      finalObservable.subscribe(data => {
        console.log(data);
        this.finalStreamData.push(data);
      })
    );
  }

  private getDataStream(videoType: string, count: number): Observable<string> {
    return interval(1000).pipe(
      map(index => `${videoType} #${index + 1}`),
      take(count)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); 
  }
  
}
  

