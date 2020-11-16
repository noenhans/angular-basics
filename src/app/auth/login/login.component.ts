import {Component} from '@angular/core';
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
export class LoginComponent {

  email = '';
  password = '';

  constructor(
    private authClient: AuthClientService,
    private router: Router
  ) {
  }


  login(formValue: LoginData): void {
    this.authClient.login(formValue.email, formValue.password).subscribe(isLogged => {
      if (isLogged) {
        this.router.navigate(['/']);
      }
    });
  }

}
