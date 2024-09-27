import { Component, OnInit } from '@angular/core';
import { concat, interval, map, merge, Observable, startWith, take } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { VideoCategory } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

constructor(private apiService:ApiService) { }

    ngOnInit(): void {
      this.concatVideoStreams();
    }
  
    private concatVideoStreams(): void {
      const techStream = this.apiService.getVideoStream(VideoCategory.TECH,5);
      const comedyStream = this.apiService.getVideoStream(VideoCategory.COMEDY,3);
      const newsStream = this.apiService.getVideoStream(VideoCategory.NEWS,4);
  
      const finalStream = concat(techStream, comedyStream, newsStream);
      finalStream.subscribe(video => {
        console.log(video);
      });
    }
  
  
}
