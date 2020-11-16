import { Injectable } from '@angular/core';
import {CanLoad, Route, UrlSegment} from '@angular/router';
import {AuthClientService} from './auth-client.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsNotLoggedGuard implements CanLoad {

  constructor(private authClient: AuthClientService) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.authClient.isNotLogged();
  }

}
