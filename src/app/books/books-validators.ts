import {AbstractControl, ValidatorFn} from '@angular/forms';

export class BooksValidators {

  static url(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value) {
        return control.value.startsWith('http://') ? null : { url: true };
      }
      return null;
    };
  }

}
