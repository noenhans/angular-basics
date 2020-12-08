import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {AuthClientService} from '../auth-client.service';
import {Router} from '@angular/router';
import {asyncData} from '../../../tests/test-helpers';

describe('LoginComponent', () => {
  let component: LoginComponent;

  const authClientSpy = jasmine.createSpyObj('AuthClientService', ['login']);
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginComponent,
        { provide: AuthClientService, useValue: authClientSpy },
        { provide: Router, useValue: routerSpy },
      ]
    });

    component = TestBed.inject(LoginComponent);
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', fakeAsync(() => {
    const loginData = {
      email: 'email@test.com',
      password: 'geheim'
    };

    authClientSpy.login.and.returnValue(asyncData(true));

    component.login(loginData);

    tick();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  }));
});
