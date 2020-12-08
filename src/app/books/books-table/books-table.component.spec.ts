import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksTableComponent } from './books-table.component';
import {MockComponent, MockDirective, MockedDirective, ngMocks} from 'ng-mocks';
import {BooksTableRowComponent} from '../books-table-row/books-table-row.component';
import {PermittedDirective} from '../../auth/permitted.directive';


fdescribe('BooksTableComponent', () => {
  let component: BooksTableComponent;
  let fixture: ComponentFixture<BooksTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BooksTableComponent,
        MockComponent(BooksTableRowComponent),
        MockDirective(PermittedDirective)
      ],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit books to parent component', (done: DoneFn) => {
    const books = [
      { name: 'first book', author: 'Jan Kowalski', isSoldOut: false, id: 1, imageUrl: 'http://test' },
      { name: 'second book', author: 'Marcin Nowaka', isSoldOut: false, id: 2, imageUrl: 'http://test' },
      { name: 'third book', author: 'Jan Kowalski', isSoldOut: false, id: 3, imageUrl: 'http://test' },
    ];

    const permittedDirective = ngMocks.findInstance(fixture.debugElement, PermittedDirective) as MockedDirective<PermittedDirective>;
    permittedDirective.__render();

    const toogleEditBtn: HTMLButtonElement = fixture.nativeElement.querySelector('#btn-toogle-edit');
    expect(toogleEditBtn).toBeTruthy();

    component.books = books;
    fixture.detectChanges();

    toogleEditBtn.click();
    fixture.detectChanges();

    expect(component.editMode).toBeTrue();

    const cancelBtn: HTMLButtonElement = fixture.nativeElement.querySelector('#btn-toogle-cancel');
    const saveBtn: HTMLButtonElement = fixture.nativeElement.querySelector('#btn-toogle-save');

    expect(cancelBtn).toBeTruthy();
    expect(saveBtn).toBeTruthy();

    component.updateBook.subscribe(emitedBooks => {
      expect(emitedBooks).toEqual(books);
      done();
    });

    saveBtn.click();
  });
});
