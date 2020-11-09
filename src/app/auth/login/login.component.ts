import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

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

  @ViewChild('loginForm') loginForm: NgForm;

  ngAfterViewInit(): void {
    console.log(this.loginForm);
  }

  login(formValue: LoginData): void {
    console.log(formValue);
  }

  logEmail(email: string): void {
    console.log(email);
  }

}
