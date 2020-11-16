import { TestBed } from '@angular/core/testing';

import { IsPermittedGuard } from './is-permitted.guard';

describe('IsPermittedGuard', () => {
  let guard: IsPermittedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsPermittedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
