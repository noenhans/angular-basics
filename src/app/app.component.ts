import {Component, OnInit} from '@angular/core';
import {NotificationService} from './core/notification.service';
import {Observable} from 'rxjs';
import {SpinnerService} from './core/spinner.service';
import {SpinnerOverlayService} from './core/spinner-overlay.service';
import {SpinnerRef} from './core/spinner-ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  errors$: Observable<string[]>;

  private spinnerRef: SpinnerRef;

  constructor(
    private notificationsService: NotificationService,
    private spinnerService: SpinnerService,
    private spinnerOverlayService: SpinnerOverlayService
  ) {
  }

  ngOnInit(): void {
    this.errors$ = this.notificationsService.errorChanged();
    this.spinnerService.spinnerChanges().subscribe(isLoading => {
      if (isLoading) {
        this.spinnerRef = this.spinnerOverlayService.showSpinner();
      } else if (this.spinnerRef) {
        this.spinnerRef.close();
      }
    });
  }

}
