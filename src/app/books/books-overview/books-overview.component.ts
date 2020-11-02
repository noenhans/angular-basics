import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {Observable} from 'rxjs';
import {BooksClientService} from '../books-client.service';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.scss']
})
export class BooksOverviewComponent implements OnInit {

  books$: Observable<Book[]>;

  viewMode: 'table' | 'list' = 'list';

  constructor(private readonly booksClient: BooksClientService) {
  }

  ngOnInit(): void {
    this.books$ = this.booksClient.getBooks();
  }


  toogleView(): void {
    this.viewMode = this.viewMode === 'table' ? 'list' : 'table';
  }

}
