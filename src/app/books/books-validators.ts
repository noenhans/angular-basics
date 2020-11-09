import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class BooksValidators {

  static url(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value) {
        return control.value.startsWith('http://')
          ? null
          : { url: true };
      }

      return null;
    };
  }

}
