import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {EmailDomainValidatorDirective} from './email-domain-validator.directive';
import { PermittedDirective } from './permitted.directive';



@NgModule({
  declarations: [LoginComponent, EmailDomainValidatorDirective, PermittedDirective],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports: [PermittedDirective]
})
export class AuthModule { }
