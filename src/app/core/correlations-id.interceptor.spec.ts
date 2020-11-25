import { TestBed } from '@angular/core/testing';

import { CorrelationsIdInterceptor } from './correlations-id.interceptor';

describe('CorrelationsIdInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CorrelationsIdInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CorrelationsIdInterceptor = TestBed.inject(CorrelationsIdInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
