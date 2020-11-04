import { TestBed } from '@angular/core/testing';

import { BooksResolver } from './books.guard';

describe('BooksGuard', () => {
  let guard: BooksResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BooksResolver);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
