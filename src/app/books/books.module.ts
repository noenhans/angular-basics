import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksListComponent} from './books-list/books-list.component';
import {BookItemComponent} from './books-item/book-item.component';
import { BooksOverviewComponent } from './books-overview/books-overview.component';
import { BooksTableComponent } from './books-table/books-table.component';
import { BooksTableRowComponent } from './books-table-row/books-table-row.component';
import {BooksRoutingModule} from './books-routing.module';
import {BooksResolver} from './books.resolver';
import { NewBookComponent } from './new-book/new-book.component';


@NgModule({
  declarations: [BooksListComponent, BookItemComponent, BooksOverviewComponent, BooksTableComponent, BooksTableRowComponent, NewBookComponent],
  exports: [],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  providers: [
    BooksResolver
  ]
})
export class BooksModule {
}
