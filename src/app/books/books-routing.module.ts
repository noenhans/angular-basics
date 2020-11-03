import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BooksOverviewComponent} from './books-overview/books-overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'grid'
  },
  {
    path: ':viewMode',
    component: BooksOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
