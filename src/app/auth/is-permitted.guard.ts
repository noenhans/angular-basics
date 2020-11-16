import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthClientService} from './auth-client.service';

@Injectable({
  providedIn: 'root'
})
export class IsPermittedGuard implements CanActivate {

  constructor(private authClient: AuthClientService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const permission: string | undefined = route.data.permitted;

    if (permission) {
      return this.authClient.isUserPermitted(permission);
    }

    return of(false);
  }

}
