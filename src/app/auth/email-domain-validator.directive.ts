import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

const VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailDomainValidatorDirective),
  multi: true
};

@Directive({
  selector: '[appEmailDomain]',
  providers: [ VALIDATOR ]
})
export class EmailDomainValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    if (control?.value) {
      const [ username, domain ] = control.value.split('@');

      return domain === 'capgemini.com'
        ? null
        : { emailDomain: true };
    }

    return null;
  }

}
