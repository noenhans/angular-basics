import {Component, Input} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss']
})
export class BooksTableComponent {
  @Input() books: Book[];

  editMode = false;

  toogleEditMode(): void {
    this.editMode = !this.editMode;
  }
}
