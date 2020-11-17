import {Component, Input} from '@angular/core';
import {Book} from '../book';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {BooksValidators} from '../books-validators';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss']
})
export class BooksTableComponent {
  private _books: Book[];

  @Input() set books(books: Book[]) {
    this._books = books;
    this.initForm(books);
  }

  get books(): Book[] {
    return this._books;
  }

  editMode = false;

  booksForm: FormArray;

  toogleEditMode(): void {
    this.editMode = !this.editMode;
  }

  private initForm(books: Book[]): void {
    if (!books?.length) {
      this.booksForm = new FormArray([]);
    } else {
      const bookFormGroups = books.map(book => new FormGroup({
        imageUrl: new FormControl(book.imageUrl, BooksValidators.url()),
        name: new FormControl(book.name, Validators.required),
        author: new FormControl(book.author, Validators.required)
      }));
      this.booksForm = new FormArray(bookFormGroups);
    }
  }
}
