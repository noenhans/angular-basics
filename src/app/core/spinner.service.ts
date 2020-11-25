import {Injectable} from '@angular/core';
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.toogleSpinner(true);
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.toogleSpinner(false);
      }
    });
  }

  toogleSpinner(isLoading: boolean): void {
    this.isLoading$.next(isLoading);
  }

  spinnerChanges(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }
}
