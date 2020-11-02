import { TestBed } from '@angular/core/testing';

import { BooksClientService } from './books-client.service';

describe('BooksClientService', () => {
  let service: BooksClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
