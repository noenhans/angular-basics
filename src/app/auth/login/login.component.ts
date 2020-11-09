import { Component, OnInit } from '@angular/core';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor() { }

  ngOnInit(): void {
  }

  login(formValue: LoginData): void {
    console.log(formValue);
  }

  logEmail(email: string): void {
    console.log(email);
  }

}
