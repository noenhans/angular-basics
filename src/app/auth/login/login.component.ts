import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthClientService} from '../auth-client.service';
import {Router} from '@angular/router';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  email = '';
  password = '';
  isLoginError = false;

  @ViewChild('loginForm') loginForm: NgForm;

  constructor(
    private authClient: AuthClientService,
    private router: Router
  ) {
  }

  ngAfterViewInit(): void {
    console.log(this.loginForm);
  }

  login(formValue: LoginData): void {
    this.authClient.login(formValue.email, formValue.password).subscribe(isLogged => {
      if (isLogged) {
        this.router.navigate(['/']);
      } else {
        this.isLoginError = true;
        setTimeout(() => this.isLoginError = false, 5000);
      }
    });
  }

  logEmail(email: string): void {
    console.log(email);
  }

}
