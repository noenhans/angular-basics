import { TestBed } from '@angular/core/testing';

import { NewBookGuard } from './new-book.guard';

describe('NewBookGuard', () => {
  let guard: NewBookGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NewBookGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
