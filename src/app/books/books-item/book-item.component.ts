import {Component, Input} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {
  private _book: Book;

  @Input() set book(book: Book) {
    this._book = book;
  }

  get book(): Book {
    return this._book;
  }

}
