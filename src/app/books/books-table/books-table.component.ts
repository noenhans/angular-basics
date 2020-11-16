import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '../book';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {BooksValidators} from '../books-validators';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss']
})
export class BooksTableComponent  {
  private _books: Book[];

  @Input() set books(books: Book[]) {
    this._books = books;
    this.createBooksForm(books);
  }

  get books(): Book[] {
    return this._books;
  }

  @Output() updateBooks = new EventEmitter<Book[]>();

  editMode = false;
  booksForm: FormArray;

  toogleEditMode(): void {
    if (this.editMode) {
      this.booksForm.reset();
      this.booksForm.setValue(this.books);
    }
    this.editMode = !this.editMode;
  }

  private createBooksForm(books: Book[]): void {
    if (books?.length) {
      const bookFormGroups = this.books.map(book => new FormGroup({
        imageUrl: new FormControl(book.imageUrl, BooksValidators.url),
        name: new FormControl(book.name, Validators.required),
        author: new FormControl(book.author, Validators.required)
      }));
      this.booksForm = new FormArray(bookFormGroups);
    } else {
      this.booksForm.clear();
    }
  }

  onSaveBooks(): void {
    if (this.booksForm.valid) {
      const booksToSave = this.booksForm.value?.map((book, index) => ({ ...this.books[index], ...book }));
      this.updateBooks.emit(booksToSave);
      this.editMode = false;
    }
  }
}
