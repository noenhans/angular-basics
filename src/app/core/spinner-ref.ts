import {OverlayRef} from '@angular/cdk/overlay';

export class SpinnerRef {

  constructor(private overlayRef: OverlayRef) {
  }

  close(): void {
    this.overlayRef.detach();
  }
}
