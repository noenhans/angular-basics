import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-star-rating-input',
  templateUrl: './star-rating-input.component.html',
  styleUrls: ['./star-rating-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StarRatingInputComponent),
    multi: true
  }]
})
export class StarRatingInputComponent implements  ControlValueAccessor {
  @Input() readonly = false;

  stars = [...Array(5).keys()];
  disabled: boolean;

  @Input() set value(value: number) {
    this._value = value || 0;
    this.onChanged(value);
  }

  get value(): number {
    return this._value;
  }

  private _value: number;
  private onChanged = (value: number) => {};
  private onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: number): void {
    if (typeof value === 'number' && value >= 0 && value <= 5) {
      this.value = value;
    } else {
      throw new Error('illegal input value');
    }
  }

  toogleStar(index: number): void {
    if (!this.readonly && !this.disabled) {
      this.value = this.value === index + 1 ? 0 : index + 1;
      this.onTouched();
    }
  }

}
