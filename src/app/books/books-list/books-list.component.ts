import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked {

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

  constructor() {
    console.log('constructor');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  onToogle(): void {
    console.log('clicked');
    this.books = this.books.map(book => ({
      ...book,
      isSoldOut: true
    }));
  }
}
