import { Component, OnInit } from '@angular/core';
import { concat, interval, map, merge, Observable, startWith, take } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

    ngOnInit(): void {
      this.concatVideoStreams();
    }
  
    private concatVideoStreams(): void {
      const techStream = this.createTechStream();
      const comedyStream = this.createComedyStream();
      const newsStream = this.createNewsStream();
  
      const finalStream = concat(techStream, comedyStream, newsStream);
      finalStream.subscribe(video => {
        console.log(video);
      });
    }
  
    private createTechStream(): Observable<string> {
      return this.createVideoStream('TechVideo', 5);
    }
  
    private createComedyStream(): Observable<string> {
      return this.createVideoStream('ComedyVideo', 3);
    }
  
    private createNewsStream(): Observable<string> {
      return this.createVideoStream('NewsVideo', 4);
    }
  
    private createVideoStream(prefix: string, count: number): Observable<string> {
      return interval(1000).pipe(
        map(index => `${prefix} #${index + 1}`),
        take(count)
      );
    }
  
  
}
