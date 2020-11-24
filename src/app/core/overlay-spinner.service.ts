import { Injectable } from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {SpinnerComponent} from './spinner/spinner.component';
import {SpinnerOverlayRef} from './spinner-overlay-ref';

@Injectable({
  providedIn: 'root'
})
export class OverlaySpinnerService {

  constructor(private overlay: Overlay) { }

  open(): SpinnerOverlayRef {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: this.overlay.scrollStrategies.block()
    });
    const spinnerRef = new ComponentPortal(SpinnerComponent);
    overlayRef.attach(spinnerRef);

    return new SpinnerOverlayRef(overlayRef);
  }
}
