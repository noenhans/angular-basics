import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookItemComponent implements OnChanges, AfterContentInit {
  @ContentChild('contentHeader') contentHeader: ElementRef;
  @ContentChild('contentFooter') contentFooter: ElementRef;

  private _book: Book;

  @Input() set book(book: Book) {
    this._book = book;
  }

  get book(): Book {
    return this._book;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Child', changes);
  }

  ngAfterContentInit(): void {
    console.log(this.contentHeader);
    console.log(this.contentFooter);
  }



}
