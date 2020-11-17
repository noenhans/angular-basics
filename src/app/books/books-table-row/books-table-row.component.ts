import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Book} from '../book';
import {ControlContainer, FormGroup} from '@angular/forms';

@Component({
  selector: 'tr[bookitem]',
  templateUrl: './books-table-row.component.html',
  styleUrls: ['./books-table-row.component.scss']
})
export class BooksTableRowComponent implements OnInit, OnChanges {

  @Input() book: Book;

  @Input() editMode: boolean;
  bookForm: FormGroup;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.bookForm = this.controlContainer.control as FormGroup;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.book && !changes.book.isFirstChange()) {
      this.bookForm = this.controlContainer.control as FormGroup;
    }
  }

}
