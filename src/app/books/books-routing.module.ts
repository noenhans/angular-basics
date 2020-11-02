import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksOverviewComponent} from './books-overview/books-overview.component';

const routes: Routes = [
  {
    path: '',
    component: BooksOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
