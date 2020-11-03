import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../book';
import {ViewMode} from './view-mode';
import {ActivatedRoute} from '@angular/router';
import {map, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.scss']
})
export class BooksOverviewComponent implements OnInit, OnDestroy {
  viewMode: 'table' | 'grid';

  readonly viewModeValues = ViewMode;

  private destroy$ = new Subject();

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
    this.activatedRoute.params.pipe(
      map(({viewMode}) => viewMode),
      takeUntil(this.destroy$)
    ).subscribe(viewMode => this.viewMode = viewMode);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get nextViewMode(): string {
    return this.viewMode === ViewMode.GRID ? ViewMode.TABLE : ViewMode.GRID;
  }
}
