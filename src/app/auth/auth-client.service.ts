import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from './user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthClientService {

  private user$ = new BehaviorSubject<User | undefined>(undefined);

  private localStorage = window.localStorage;

  constructor(private httpClient: HttpClient) {
    const loggedUser = this.localStorage.getItem('loggedUser') && JSON.parse(this.localStorage.getItem('loggedUser'));
    if (loggedUser) {
      this.user$.next(loggedUser);
    }
  }

  login(email: string, password: string): Observable<boolean> {
    return this.httpClient.get<User[]>(`api/users?email=${email}&password=${password}`).pipe(
      map(([user]) => {
        if (user) {
          this.user$.next(user);
          this.localStorage.setItem('loggedUser', JSON.stringify(user));
          return true;
        }

        return false;
      })
    );
  }

  logout(): void {
    this.user$.next(undefined);
    this.localStorage.removeItem('loggedUser');
  }

  isUserPermitted(permission: string): Observable<boolean> {
    return this.user$.pipe(
      map(user => user?.permissions?.includes(permission))
    );
  }

  isNotLogged(): Observable<boolean> {
    return this.user$.pipe(map(user => !user));
  }

  isLogged(): Observable<boolean> {
    return this.user$.pipe(map(user => !!user));
  }

}
