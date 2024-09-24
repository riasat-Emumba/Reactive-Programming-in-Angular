import { Component, OnInit } from '@angular/core';
import { concat, interval, map, merge, Observable, startWith, take } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  ngOnInit(): void {
    this.getDataForTech();
    this.getDataForComedy();
    this.getDataForNews();
    // this.getFinalObservableUsingConcat();
    this.getFinalObservableUsingMerge();
  }


  getFinalObservableUsingMerge() {
    const techObs = this.getDataForTech();
    const comedyObs = this.getDataForComedy();
    const newsObs = this.getDataForNews();

    const finalObservable = merge(techObs, comedyObs, newsObs);
    finalObservable.subscribe(data => {
      console.log(data);

    })
  }

  getFinalObservableUsingConcat() {
    const techObs = this.getDataForTech();
    const comedyObs = this.getDataForComedy();
    const newsObs = this.getDataForNews();

    const finalObservable = concat(techObs, comedyObs, newsObs);
    finalObservable.subscribe(data => {
      console.log(data);

    })
  }

  getDataForTech() {
    return  interval(1000).pipe(
      map(count => 'TechVideo #' + (count + 1)),
      take(5)
    )

  }

  getDataForComedy() {
    return interval(1000).pipe(
      map(count => 'ComedyVideo #' + (count + 1)),
      take(3)
    );
  }

  getDataForNews() {
    return  interval(1000).pipe(
      map(count => 'NewsVideo #' + (count + 1)),
      take(4)
    )
  }
}
