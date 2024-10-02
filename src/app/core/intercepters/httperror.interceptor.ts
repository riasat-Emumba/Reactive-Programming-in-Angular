import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { NotificationService } from '../services/notification.service';
import { MESSAGES } from '../constants/messages.constants';

@Injectable()
export class HttperrorInterceptor implements HttpInterceptor {

  constructor(private notificationService: NotificationService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        let errorMessage: string = MESSAGES.SOMETHING_WENT_WRONG;

        if (error.error instanceof ErrorEvent) {
          // Client-side or network error
          errorMessage = MESSAGES.NETWORK_ERROR
        } else {
          // Server-side error
          switch (error.status) {
            case 0:
              // If status code is 0, it indicates no response from server (network issue or server down)
              errorMessage = MESSAGES.SERVER_UNREACHABLE
              break;
            case 400:
              errorMessage = MESSAGES.BAD_REQUEST
              break;
            case 401:
              errorMessage = MESSAGES.UNAUTHORIZED
              break;
            case 403:
              errorMessage = MESSAGES.ACCESS_DENIED
              break;
            case 404:
              errorMessage = MESSAGES.RESOURCE_NOT_FOUND
              break;
            case 500:
              errorMessage = MESSAGES.INTERNAL_SERVER_ERROR
              break;
            default:
              errorMessage = MESSAGES.SERVER_ERROR.replace('{status}', error.status.toString());
          }
        }

        this.notificationService.showError(errorMessage);

        return throwError(() => new Error(errorMessage));
      }))
  }
}
