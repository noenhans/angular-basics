import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from './user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthClientService {

  private readonly LOGGED_USER = 'loggedUser';

  private user$ = new BehaviorSubject<User>(this.getUserFromLocalStorage());

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.httpClient.get<User[]>(`api/users?email=${email}&password=${password}`).pipe(
      map(users => {
        if (!users?.length) {
          return false;
        }
        this.user$.next(users[0]);
        window.localStorage.setItem(this.LOGGED_USER, JSON.stringify(users[0]));
        return true;
      })
    );
  }

  logout(): void {
    this.user$.next(null);
    window.localStorage.removeItem(this.LOGGED_USER);
  }

  isLogged(): Observable<boolean> {
    return this.user$.pipe(map(user => !!user));
  }

  isUserPermitted(persmission: string): Observable<boolean> {
    return this.user$.pipe(map(user => {
      if (!user || !user.permissions?.length) {
        return false;
      }

      return user.permissions.includes(persmission);
    }));
  }

  private getUserFromLocalStorage(): User {
    const storedValue = window.localStorage.getItem(this.LOGGED_USER);
    const user: User = storedValue && JSON.parse(storedValue);

    return user || null;
  }
}
