import {Component, forwardRef, Input, OnInit} from '@angular/core';
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
export class StarRatingInputComponent implements OnInit, ControlValueAccessor {

  @Input() isReadonly = false;

  @Input() set starNumber(starNumber: number) {
    this.stars = [...Array(starNumber).keys()].map(s => s + 1);
  }

  stars = [...Array(5).keys()].map(s => s + 1);
  value = 0;
  isDisabled = false;

  onChanged = (value: number) => {};
  onTouched = () => {};

  constructor() { }

  ngOnInit(): void {
  }

  selectStar(star: number): void {
    if (!this.isDisabled && !this.isReadonly) {
      this.onTouched();
      this.value = this.value === star ? 0 : star;
      this.onChanged(this.value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(value: number): void {
    this.value = value;
  }

}
