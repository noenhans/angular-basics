import {Component, OnInit} from '@angular/core';
import {NotificationService} from './core/notification.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  errors$: Observable<string[]>;

  constructor(private notificationsService: NotificationService) {
  }

  ngOnInit(): void {
    this.errors$ = this.notificationsService.errorChanged();
  }

}
