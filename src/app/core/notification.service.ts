import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notifications$ = new BehaviorSubject<string[]>([]);

  constructor() { }

  error(message: string): void {
    const currentNotifications = this.notifications$.value;
    const nextState = [...currentNotifications, message];
    this.notifications$.next(nextState);

    setTimeout(() => {
      const [ firstNotification, ...restNotificatins ] = this.notifications$.value;
      this.notifications$.next(restNotificatins);
    }, 3000);
  }

  errorChanged(): Observable<string[]> {
    return this.notifications$.asObservable();
  }
}
