import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Book} from './book';
import {BooksClientService} from './books-client.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class BooksResolver implements Resolve<Book[]> {

  constructor(private booksClient: BooksClientService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book[]> {
    return this.booksClient.getBooks().pipe(catchError(error => {
      console.log(error);
      return of([]);
    }));
  }

}
