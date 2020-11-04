import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../book';
import {ViewMode} from './view-mode';
import {ActivatedRoute} from '@angular/router';
import {pluck, switchMap, takeUntil} from 'rxjs/operators';
import {combineLatest, Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.scss'],
  providers: []
})
export class BooksOverviewComponent implements OnInit, OnDestroy {
  viewMode: 'table' | 'grid';

  readonly viewModeValues = ViewMode;

  private destroy$ = new Subject();

  books$: Observable<Book[]>;

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
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get nextViewMode(): string {
    return this.viewMode === ViewMode.GRID ? ViewMode.TABLE : ViewMode.GRID;
  }
}
