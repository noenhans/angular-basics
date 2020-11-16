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
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authClient: AuthClientService
  ) { }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  @Input() set appPermitted(permission: string) {
    if (!permission) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.authClient.isUserPermitted(permission)
        .pipe(takeUntil(this.destroy$))
        .subscribe(isPermitted => {
          if (isPermitted) {
            this.viewContainer.createEmbeddedView(this.template);
          } else {
            this.viewContainer.clear();
          }
        });
    }
  }


}
