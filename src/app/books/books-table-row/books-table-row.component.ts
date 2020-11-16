import {Component, Input} from '@angular/core';
import {Book} from '../book';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'tr[bookitem]',
  templateUrl: './books-table-row.component.html',
  styleUrls: ['./books-table-row.component.scss']
})
export class BooksTableRowComponent  {
  @Input() book: Book;
  @Input() editMode: boolean;
  @Input() bookForm: FormGroup;

}
