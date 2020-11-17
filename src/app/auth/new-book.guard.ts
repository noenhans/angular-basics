import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthClientService} from './auth-client.service';

@Injectable({
  providedIn: 'root'
})
export class NewBookGuard implements CanActivate {

  constructor(private authClient: AuthClientService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    const persmission = route.data.permitted;

    if (!persmission) {
      return of(false);
    }

    return this.authClient.isUserPermitted(persmission);
  }

}
