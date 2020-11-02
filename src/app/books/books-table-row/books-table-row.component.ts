import {Component, Input} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'tr[book-item]',
  templateUrl: './books-table-row.component.html',
  styleUrls: ['./books-table-row.component.scss']
})
export class BooksTableRowComponent {
  @Input() book: Book;
}