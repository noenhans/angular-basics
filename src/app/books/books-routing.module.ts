import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BooksOverviewComponent} from './books-overview/books-overview.component';
import {BooksResolver} from './books.resolver';
import {NewBookComponent} from './new-book/new-book.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'grid'
  },
  {
    path: ':viewMode',
    component: BooksOverviewComponent,
    resolve: { books: BooksResolver }
  },
  {
    path: 'book/new',
    component: NewBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
