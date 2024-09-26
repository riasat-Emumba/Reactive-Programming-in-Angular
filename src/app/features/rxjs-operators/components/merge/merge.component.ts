import { Component, OnInit } from '@angular/core';
import { interval, map, merge, Observable, take } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {
  finalStreamData: string[] = [];

  ngOnInit(): void {
    this.getFinalObservableUsingMerge();
  }

  private getFinalObservableUsingMerge(): void {
    const techObs = this.getDataStream('TechVideo', 5);
    const comedyObs = this.getDataStream('ComedyVideo', 3);
    const newsObs = this.getDataStream('NewsVideo', 4);

    const finalObservable = merge(techObs, comedyObs, newsObs);
    finalObservable.subscribe(data => {
      console.log(data);
      this.finalStreamData.push(data);
    });
  }

  private getDataStream(videoType: string, count: number): Observable<string> {
    return interval(1000).pipe(
      map(index => `${videoType} #${index + 1}`),
      take(count)
    );
  }
  
}
  

