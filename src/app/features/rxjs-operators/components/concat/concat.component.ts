import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { VIDEO_CATEGORIES } from 'src/app/core/constants/categories.constants';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.concatVideoStreams();
  }

  private concatVideoStreams(): void {
    const techStream = this.apiService.getVideoStream(VIDEO_CATEGORIES.TECH, 5);
    const comedyStream = this.apiService.getVideoStream(VIDEO_CATEGORIES.COMEDY, 3);
    const newsStream = this.apiService.getVideoStream(VIDEO_CATEGORIES.NEWS, 4);

    const finalStream = concat(techStream, comedyStream, newsStream);
    finalStream.subscribe(video => {
      console.log(video);
    });
  }


}
