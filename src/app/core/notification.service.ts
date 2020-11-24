import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private errorNotifications$ = new BehaviorSubject<string[]>([]);

  error(message: string): void {
    const currentValue = this.errorNotifications$.value;
    this.errorNotifications$.next([...currentValue, message]);
    setTimeout(() => {
      const [firstMessage, ...rest] = this.errorNotifications$.value;
      this.errorNotifications$.next(rest);
    }, 5000);
  }

  errorChanged(): Observable<string[]> {
    return this.errorNotifications$.asObservable();
  }
}
