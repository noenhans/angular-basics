import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksTableRowComponent } from './books-table-row.component';

xdescribe('BooksTableRowComponent', () => {
  let component: BooksTableRowComponent;
  let fixture: ComponentFixture<BooksTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksTableRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
