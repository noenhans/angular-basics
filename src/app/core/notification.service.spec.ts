import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit and clear error message', (done: DoneFn) => {
    const errorMessage = 'error message';
    const expectedValues = [
      [errorMessage],
      []
    ];
    let index = 0; // zamiast podejścia z indeksem można też spróbować marble tests

    service.error(errorMessage);

    service.errorChanged().subscribe(notifications => {
      expect(notifications).toEqual(expectedValues[index]);

      if (index === 1) {
        done();
      }

      index++;
    });
  });

  it('should emit and clear two error messages', (done: DoneFn) => {
    const errorMessage1 = 'first message';
    const errorMessage2 = 'second message';
    const expectedValues = [
      [],
      [errorMessage1],
      [errorMessage1, errorMessage2],
      [errorMessage2],
      []
    ];
    let index = 0; // zamiast podejścia z indeksem można też spróbować marble tests

    service.errorChanged().subscribe(notifications => {
      expect(notifications).toEqual(expectedValues[index]);

      if (index === 4) {
        done();
      }

      index++;
    });

    service.error(errorMessage1);
    service.error(errorMessage2);
  });

});
