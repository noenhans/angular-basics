import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotFoundComponent} from './not-found/not-found.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ErrorHandlingInterceptor} from './error-handling.interceptor';
import {CorrelationIdInterceptor} from './correlation-id.interceptor';



@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorrelationIdInterceptor,
      multi: true
    }
  ],
  exports: [NotFoundComponent]
})
export class CoreModule { }
