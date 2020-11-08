import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appEmail]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailDirective, multi: true }]
})
export class EmailDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const value: string = control?.value;

    if (value) {
      const [ username, domain ] = value.split('@');

      if (domain !== 'capgemini.com') {
        return {
          domain: true
        };
      }
    }

    return null;
  }

}
