import {Injectable} from '@angular/core';
import {BooksClientService} from './books-client.service';
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksAsyncValidators {

  constructor(private booksClient: BooksClientService) {
  }

  bookAlreadyExists(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const { name, author } = control.value;

      if (!name || !author) {
        return of(null);
      }

      return this.booksClient.getBooks().pipe(
        map(books => {
          const booksExists = books.some(book => book.author.toLowerCase() === author.toLowerCase()
            && book.name.toLowerCase() === name.toLowerCase());

          return booksExists ? { bookExists: true } : null;
        }),
        catchError(error => {
          console.log(error);
          return of(null);
        })
      );
    };
  }

}
