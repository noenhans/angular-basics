import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email = '';
  password = '';

  onSumbit(): void {
    console.log(this.email, this.password);
  }

  onEmailChange(): void {
    console.log(this.email);
  }

}
