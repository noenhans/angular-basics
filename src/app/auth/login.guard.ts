import { Injectable } from '@angular/core';
import {CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthClientService} from './auth-client.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {

  constructor(private authCLient: AuthClientService, private router: Router) {
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> {
    return this.authCLient.isLogged().pipe(map(isLogged => {
      if (isLogged) {
        this.router.navigate(['/']);
      }
      return !isLogged;
    }));
  }
}
