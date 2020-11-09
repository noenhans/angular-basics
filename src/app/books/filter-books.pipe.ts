import { Pipe, PipeTransform } from '@angular/core';
import {Book} from './book';

@Pipe({
  name: 'filterBooks'
})
export class FilterBooksPipe implements PipeTransform {

  transform(books: Book[], searchedValue: string): Book[] {
    if (!books?.length || !searchedValue) {
      return books;
    }

    return books?.filter(book => book.name.toLowerCase().includes(searchedValue.toLowerCase())
      || book.author.toLowerCase().includes(searchedValue.toLowerCase()));
  }

}
