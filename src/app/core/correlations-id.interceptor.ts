import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CorrelationsIdInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const updatedRequest = request.clone({
      headers: request.headers.append('X-Correlation-Id', this.generateUuid())
    });
    return next.handle(updatedRequest);
  }

  private generateUuid(): string {
    // TODO
    return 'hello world';
  }
}
