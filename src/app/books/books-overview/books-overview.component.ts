import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../book';
import {ViewMode} from './view-mode';
import {ActivatedRoute} from '@angular/router';
import {debounceTime, distinctUntilChanged, pluck, switchMap, takeUntil} from 'rxjs/operators';
import {combineLatest, Observable, Subject} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.scss'],
  providers: []
})
export class BooksOverviewComponent implements OnInit, OnDestroy {
  searchedValue = '';
  viewMode: 'table' | 'grid';

  readonly viewModeValues = ViewMode;

  books$: Observable<Book[]>;

  searchCtrl = new FormControl('');

  private destroy$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.books$ = this.activatedRoute.data.pipe(pluck('books'));

    this.activatedRoute.params.pipe(
      pluck('viewMode'),
      takeUntil(this.destroy$)
    ).subscribe(viewMode => this.viewMode = viewMode);

    this.searchCtrl.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(searchedValue => this.searchedValue = searchedValue);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearch(): void {

  }

  get nextViewMode(): string {
    return this.viewMode === ViewMode.GRID ? ViewMode.TABLE : ViewMode.GRID;
  }
}
