import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CorrelationIdInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const correlationId = this.generateUuid();

    const updatedRequest = request.clone({
      headers: request.headers.append('X-Correlation-Id', correlationId)
    });

    return next.handle(updatedRequest);
  }

  private generateUuid(): string {
    // TODO
    return 'hello-world';
  }

}
