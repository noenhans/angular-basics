import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../book';
import {ViewMode} from './view-mode';
import {ActivatedRoute} from '@angular/router';
import {debounceTime, distinctUntilChanged, pluck, switchMap, takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {FormControl} from '@angular/forms';
import {BooksClientService} from '../books-client.service';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.scss'],
  providers: []
})
export class BooksOverviewComponent implements OnInit, OnDestroy {
  viewMode: 'table' | 'grid';
  searchedValue = '';
  editMode = false;

  readonly viewModeValues = ViewMode;

  private destroy$ = new Subject();

  books$: Observable<Book[]>;

  searchControl = new FormControl('');

  constructor(
    private activatedRoute: ActivatedRoute,
    private booksClient: BooksClientService
  ) {
  }

  ngOnInit(): void {
    this.books$ = this.activatedRoute.data.pipe(pluck('books'));

    this.activatedRoute.params.pipe(
      pluck('viewMode'),
      takeUntil(this.destroy$)
    ).subscribe(viewMode => this.viewMode = viewMode);


    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(value => this.searchedValue = value);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get nextViewMode(): string {
    return this.viewMode === ViewMode.GRID ? ViewMode.TABLE : ViewMode.GRID;
  }

  onUpdateBooks(books: Book[]): void {
    this.booksClient.updateBooks(books).subscribe(() => {
      this.books$ = this.booksClient.getBooks();
      this.onToogleEditMode();
    });
  }

  onToogleEditMode(): void {
    this.editMode = !this.editMode;
  }
}
