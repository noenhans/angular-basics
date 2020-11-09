import {AbstractControl, AsyncValidator, ValidationErrors, ValidatorFn} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {BooksClientService} from './books-client.service';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewBookAsyncValidator  {

  constructor(private booksClient: BooksClientService) {
  }

  validate(): ValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> =>  {
      const { name, author } = control.value;

      if (!name || !author) {
        return of(null);
      }

      return this.booksClient.getBooks().pipe(
        map(books => {
          return books.some(book => book.name === name && book.author === author)
            ? { bookExists: true }
            : null;
        }),
        catchError(error => {
          console.log(error);
          return of(null);
        })
      );
    };
  }

}
