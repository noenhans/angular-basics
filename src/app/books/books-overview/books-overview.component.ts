import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {ViewMode} from './view-mode';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.scss']
})
export class BooksOverviewComponent implements OnInit{
  viewMode: 'table' | 'grid';

  readonly viewModeValues = ViewMode;

  books: Book[] = [
    {
      name: 'Harry Potter i Kamień Filozoficzny 1',
      author: 'J. K. Rowling',
      imageUrl: 'https://ecsmedia.pl/c/harry-potter-i-kamien-filozoficzny-tom-1-w-iext43794838.jpg',
      isSoldOut: false
    },
    {
      name: 'Harry Potter i Kamień Filozoficzny 2',
      author: 'J. K. Rowling',
      imageUrl: 'https://ecsmedia.pl/c/harry-potter-i-kamien-filozoficzny-tom-1-w-iext43794838.jpg',
      isSoldOut: false
    },
    {
      name: 'Harry Potter i Kamień Filozoficzny 3',
      author: 'J. K. Rowling',
      imageUrl: 'https://ecsmedia.pl/c/harry-potter-i-kamien-filozoficzny-tom-1-w-iext43794838.jpg',
      isSoldOut: false
    },
    {
      name: 'Harry Potter i Kamień Filozoficzny 4',
      author: 'J. K. Rowling',
      imageUrl: 'https://ecsmedia.pl/c/harry-potter-i-kamien-filozoficzny-tom-1-w-iext43794838.jpg',
      isSoldOut: true
    },
    {
      name: 'Harry Potter i Kamień Filozoficzny 5',
      author: 'J. K. Rowling',
      imageUrl: 'https://ecsmedia.pl/c/harry-potter-i-kamien-filozoficzny-tom-1-w-iext43794838.jpg',
      isSoldOut: false
    }
  ];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.viewMode = this.activatedRoute.snapshot.params.viewMode;
  }

  toogleViewMode(): void {
    this.viewMode = this.viewMode === ViewMode.GRID ? ViewMode.TABLE : ViewMode.GRID;
  }
}
