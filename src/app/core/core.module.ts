import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ErrorHandlingInterceptor} from './error-handling.interceptor';
import {CorrelationsIdInterceptor} from './correlations-id.interceptor';
import {OverlayModule} from '@angular/cdk/overlay';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    OverlayModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorrelationsIdInterceptor,
      multi: true
    }
  ],
  entryComponents: [
    SpinnerComponent
  ]
})
export class CoreModule { }
