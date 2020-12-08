import {TestBed} from '@angular/core/testing';

import { AuthClientService } from './auth-client.service';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

fdescribe('AuthClientService', () => {
  let service: AuthClientService;

  describe('HttpClientSpy', () => {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          AuthClientService,
          { provide: HttpClient, useValue: httpClientSpy }
        ]
      });
      service = TestBed.inject(AuthClientService);
    });

    afterEach(() => {
      window.localStorage.clear();
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should login', (done: DoneFn) => {
      const email = 'email@test.com';
      const password = 'geheim';
      const expectedUser = { email, password };

      httpClientSpy.get.and.returnValue(of([expectedUser]));

      service.login(email, password).subscribe(isLogged => {
        expect(isLogged).toBeTrue();
        expect(window.localStorage.getItem('loggedUser')).toMatch(JSON.stringify(expectedUser));
        done();
      });
    });
  });

  describe('HttpTestingModule', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [AuthClientService],
        imports: [HttpClientTestingModule]
      });
      service = TestBed.inject(AuthClientService);
      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
      window.localStorage.clear();
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should login', (done: DoneFn) => {
      const email = 'email@test.com';
      const password = 'geheim';
      const expectedUser = { email, password };


      service.login(email, password).subscribe(isLogged => {
        expect(isLogged).toBeTrue();
        expect(window.localStorage.getItem('loggedUser')).toMatch(JSON.stringify(expectedUser));
        done();
      });

      const req = httpTestingController.expectOne(`api/users?email=${email}&password=${password}`);
      expect(req.request.method).toEqual('GET');
      req.flush([expectedUser]);

      httpTestingController.verify();
    });

  });
});


