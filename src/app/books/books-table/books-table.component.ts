import {Component, EventEmitter, Input, Output} from '@angular/core';
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
    this.editMode = false;
    this.initForm(books);
  }

  get books(): Book[] {
    return this._books;
  }

  @Output() updateBook = new EventEmitter<Book[]>();

  editMode = false;

  booksForm: FormArray;

  toogleEditMode(): void {
    if (this.editMode) {
      this.booksForm.reset();
      this.booksForm.setValue(this.books);
    }
    this.editMode = !this.editMode;
  }

  private initForm(books: Book[]): void {
    if (!books?.length) {
      this.booksForm = new FormArray([]);
    } else {
      const bookFormGroups = books.map(book => new FormGroup({
        id: new FormControl(book.id),
        imageUrl: new FormControl(book.imageUrl, BooksValidators.url()),
        name: new FormControl(book.name, Validators.required),
        author: new FormControl(book.author, Validators.required),
        isSoldOut: new FormControl(book.isSoldOut)
      }));
      this.booksForm = new FormArray(bookFormGroups);
    }
  }

  updateBooks(): void {
    if (this.booksForm.valid) {
      this.updateBook.emit(this.booksForm.value);
    }
  }
}

