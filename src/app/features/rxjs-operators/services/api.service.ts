import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, interval, lastValueFrom, map, Observable, of, take } from 'rxjs';
import { IPhoto } from '../models/iphoto';
import { IUsersDetail } from '../models/iusers-detail';
import { IUser } from '../models/iuser';
import { ISuperUser } from '../models/isuper-user';
import { IVideo } from '../models/ivideo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // API endpoints
  private readonly PHOTO_API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10';
  private readonly FAKE_URL = 'https://jsonplaceholder.typicode.com/photosaq213?_limit=10';
  private readonly USER_DETAILS_URL = 'https://jsonplaceholder.typicode.com/todos/2';
  private readonly USERS_API = 'assets/users.json';
  private readonly EMP_API = 'assets/super-users.json';
  private readonly GET_VIDEOS = 'assets/videos.json';

  constructor(private http: HttpClient) { }

  getUsersDetail(): Observable<IUsersDetail> {
    return this.http.get<IUsersDetail>(this.USER_DETAILS_URL);
  }

  getPhotos(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(this.PHOTO_API_URL);
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.USERS_API)
  }

  getSuperUsers(): Observable<ISuperUser[]> {
    return this.http.get<ISuperUser[]>(this.EMP_API);
  }

  getError(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(this.FAKE_URL)
  }

  getTechData(channel: string): Observable<string> {
    return of(`${channel} Video Uploaded`).pipe(delay(1500));
  }

  getNewsData(channel: string): Observable<string> {
    return of(`${channel} Video Uploaded`).pipe(delay(500));
  }

  getComedyData(channel: string): Observable<string> {
    return of(`${channel} Video Uploaded`).pipe(delay(300));
  }

  getVideos(): Observable<IVideo[]> {
    return this.http.get<IVideo[]>(this.GET_VIDEOS)
  }

  searchVideos(searchTerm: string): Observable<IVideo[]> {
    return this.getVideos().pipe(
      map(videos => videos.filter(video => video.title.toLowerCase().includes(searchTerm))) 
    );
  }
  
  getVideoStream(prefix: string, count: number): Observable<string> {
    return interval(1000).pipe(
      map((index) => `${prefix} #${index + 1}`),
      take(count)
    );
  }

  getUsersAsPromise(): Promise<IUser[]> {
    return lastValueFrom(this.http.get<IUser[]>(this.USERS_API));
    // return   this.http.get<any>(this.USERS_API).toPromise();
    
  }


}
