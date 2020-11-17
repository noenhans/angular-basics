import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BooksOverviewComponent} from './books-overview/books-overview.component';
import {BooksResolver} from './books.resolver';
import {NewBookComponent} from './new-book/new-book.component';
import {NewBookGuard} from '../auth/new-book.guard';

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
    component: NewBookComponent,
    canActivate: [NewBookGuard],
    data: { permitted: 'newBook' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
