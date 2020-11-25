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

  bookRateControl = new FormControl(3);

  @Input() set book(book: Book) {
    this._book = book;
  }

  get book(): Book {
    return this._book;
  }

  ngOnInit(): void {
    this.bookRateControl.valueChanges.subscribe(value => console.log(value));
  }

}
