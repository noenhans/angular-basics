import {Component, OnInit} from '@angular/core';
import {NotificationService} from './core/notification.service';
import {Observable} from 'rxjs';
import {SpinnerService} from './core/spinner.service';
import {SpinnerOverlayRef} from './core/spinner-overlay-ref';
import {OverlaySpinnerService} from './core/overlay-spinner.service';

interface Book {
  name: string;
  author: string;
  imageUrl?: string;
  isSoldOut: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  errors$: Observable<string[]>;

  private spinner: SpinnerOverlayRef;

  constructor(
    private notificationService: NotificationService,
    private spinnerService: SpinnerService,
    private overlaySpinnerService: OverlaySpinnerService
  ) {
  }

  ngOnInit(): void {
    this.errors$ = this.notificationService.errorChanged();
    this.spinnerService.isLoading().subscribe(isLoading => {
      if (isLoading) {
        this.spinner = this.overlaySpinnerService.open();
      } else if (this.spinner) {
        this.spinner.close();
      }
    });
  }


}
