import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../book';
import {ControlContainer, FormGroup} from '@angular/forms';

@Component({
  selector: 'tr[bookitem]',
  templateUrl: './books-table-row.component.html',
  styleUrls: ['./books-table-row.component.scss']
})
export class BooksTableRowComponent implements OnInit {
  @Input() book: Book;
  @Input() editMode: boolean;

  bookForm: FormGroup;

  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.bookForm = this.controlContainer.control as FormGroup;
  }

}
