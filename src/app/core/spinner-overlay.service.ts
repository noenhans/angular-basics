import { Injectable } from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {SpinnerComponent} from './spinner/spinner.component';
import {SpinnerRef} from './spinner-ref';

@Injectable({
  providedIn: 'root'
})
export class SpinnerOverlayService {

  constructor(
    private overlay: Overlay
  ) { }

  showSpinner(): SpinnerRef {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerVertically().centerHorizontally(),
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true
    });

    const componentRef = new ComponentPortal(SpinnerComponent);

    overlayRef.attach(componentRef);

    return new SpinnerRef(overlayRef);
  }
}
