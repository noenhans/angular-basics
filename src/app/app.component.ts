import {Component, OnInit} from '@angular/core';
import {NotificationService} from './core/notification.service';
import {Observable} from 'rxjs';

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

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.errors$ = this.notificationService.errorChanged();
  }


}
