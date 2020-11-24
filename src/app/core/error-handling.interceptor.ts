import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {NotificationService} from './notification.service';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

  constructor(private notificationService: NotificationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse) {
        switch (error.status) {
          case 404:
            this.notificationService.error('404: Not Found');
            break;
          case 500:
            this.notificationService.error(`500: Internal Server Error`);
            break;
          case 504:
            this.notificationService.error(`504: Gateway Timeout`);
            break;
        }
      }

      return throwError(error);
    }));
  }
}
