import { Pipe, PipeTransform } from '@angular/core';
import {Book} from './book';

@Pipe({
  name: 'filterBooks'
})
export class FilterBooksPipe implements PipeTransform {

  transform(books: Book[], searchedValue: string): Book[] {
    if (books?.length && searchedValue) {
      return books.filter(book => book.author.toLowerCase().includes(searchedValue.toLowerCase())
        || book.name.toLowerCase().includes(searchedValue.toLowerCase()));
    }

    return books;
  }

}
