import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksListComponent} from './books-list/books-list.component';
import {BookItemComponent} from './books-item/book-item.component';
import { BooksOverviewComponent } from './books-overview/books-overview.component';
import { BooksTableComponent } from './books-table/books-table.component';
import { BooksTableRowComponent } from './books-table-row/books-table-row.component';
import {BooksRoutingModule} from './books-routing.module';


@NgModule({
  declarations: [BooksListComponent, BookItemComponent, BooksOverviewComponent, BooksTableComponent, BooksTableRowComponent],
  exports: [],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  providers: []
})
export class BooksModule {
}
