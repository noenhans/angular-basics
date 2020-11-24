import {OverlayRef} from '@angular/cdk/overlay';

export class SpinnerOverlayRef {
  constructor(private overlayRef: OverlayRef) {
  }

  close(): void {
    this.overlayRef.dispose();
  }
}
