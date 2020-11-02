import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksOverviewComponent} from './books/books-overview/books-overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: BooksOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
