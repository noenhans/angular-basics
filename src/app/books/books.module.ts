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
import {ReactiveFormsModule} from '@angular/forms';
import { FilterBooksPipe } from './filter-books.pipe';
import {AuthModule} from '../auth/auth.module';


@NgModule({
  declarations: [
    BooksListComponent,
    BookItemComponent,
    BooksOverviewComponent,
    BooksTableComponent,
    BooksTableRowComponent,
    NewBookComponent,
    FilterBooksPipe
  ],
  exports: [],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [
    BooksResolver
  ]
})
export class BooksModule {
}
