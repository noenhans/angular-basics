import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.toogleSpinner(true);
      } else if (event instanceof NavigationEnd) {
        this.toogleSpinner(false);
      }
    });
  }

  toogleSpinner(loading: boolean): void {
    this.isLoading$.next(loading);
  }

  isLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }
}
