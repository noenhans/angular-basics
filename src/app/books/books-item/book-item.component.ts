import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../book';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  private _book: Book;

  bookRate = new FormControl(0);

  @Input() set book(book: Book) {
    this._book = book;
    if (book.isSoldOut) {
      this.bookRate.disable();
    } else {
      this.bookRate.enable();
    }
  }

  get book(): Book {
    return this._book;
  }

  ngOnInit(): void {
    this.bookRate.valueChanges.subscribe(value => console.log(value));
  }

}
