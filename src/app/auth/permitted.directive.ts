import {Directive, Input, OnDestroy, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthClientService} from './auth-client.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Directive({
  selector: '[appPermitted]'
})
export class PermittedDirective implements OnDestroy {

  private destroy$ = new Subject();

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authClient: AuthClientService
  ) { }

  @Input() set appPermitted(persmission: string) {
    this.destroy$.next();

    if (!persmission) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }

    this.authClient.isUserPermitted(persmission)
      .pipe(takeUntil(this.destroy$))
      .subscribe(isPermitted => {
        if (isPermitted) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
