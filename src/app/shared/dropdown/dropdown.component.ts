import {Component, forwardRef, HostListener, Input, TemplateRef} from '@angular/core';
import {DropdownItem} from './dropdown-item';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropdownComponent),
    multi: true
  }]
})
export class DropdownComponent implements ControlValueAccessor {
  @Input() dropdownItemTemplate: TemplateRef<any>;
  @Input() items: DropdownItem[];
  selectedItem: DropdownItem;

  isOpened = false;
  isDisabled = false;
  private value: any;

  private onChanged = (value: any) => {};
  private onTouched = () => {};

  @HostListener('focusout')
  onFocusout(): void {
    this.isOpened = false;
  }

  toogleDropdown(): void {
    if (!this.isDisabled) {
      this.isOpened = !this.isOpened;
      this.onTouched();
    }
  }

  select(item: DropdownItem): void {
    this.value = item.key;
    this.onChanged(this.value);
    this.selectedItem = item;
    this.isOpened = false;
  }

  writeValue(value: any): void {
    this.value = value;
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

}
