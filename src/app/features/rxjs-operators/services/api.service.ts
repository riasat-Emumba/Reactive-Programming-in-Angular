import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  // API endpoints
  private readonly PHOTO_API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10';
  private readonly USER_DETAILS_URL = 'https://jsonplaceholder.typicode.com/todos/2';

  constructor(private httpClient: HttpClient) {}

  fetchUserDetails(): Observable<any> {
    return this.httpClient.get<any>(this.USER_DETAILS_URL).pipe(
      catchError(this.handleError)
    );
  }

  getPhotos(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.PHOTO_API_URL).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error); 
    return throwError('Something went wrong; please try again later.');
  }
}
