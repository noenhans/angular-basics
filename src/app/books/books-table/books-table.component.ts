import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss']
})
export class BooksTableComponent implements OnInit {
  @Input() books: Book[];

  constructor() { }

  ngOnInit(): void {
  }

}
