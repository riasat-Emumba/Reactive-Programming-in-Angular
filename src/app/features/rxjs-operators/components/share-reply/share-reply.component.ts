import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { catchError, map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-share-reply',
  templateUrl: './share-reply.component.html',
  styleUrls: ['./share-reply.component.scss']
})
export class ShareReplyComponent implements OnInit {

  allPhotos$!: Observable<any>;
  first3Photos$!: Observable<any>;
  last3Photos$!: Observable<any>;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos() {
    this.allPhotos$ = this.apiService.getPhotos().pipe(
      shareReplay(1)
    );

    const filterPhotos = (start: number, end: number) =>
      map((data: any[]) => data.filter(photo => photo.id > start && photo.id <= end));

    // Filtered observables
    this.first3Photos$ = this.allPhotos$.pipe(filterPhotos(0, 3));
    this.last3Photos$ = this.allPhotos$.pipe(filterPhotos(7, 10));
  }

}
