import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksListComponent} from './books-list/books-list.component';
import {BookItemComponent} from './books-item/book-item.component';


@NgModule({
  declarations: [BooksListComponent, BookItemComponent],
  exports: [BooksListComponent],
  imports: [
    CommonModule
  ]
})
export class BooksModule {
}
