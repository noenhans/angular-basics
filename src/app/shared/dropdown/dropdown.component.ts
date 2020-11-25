import {Component, forwardRef, HostListener, Input, OnInit, TemplateRef} from '@angular/core';
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
export class DropdownComponent implements OnInit, ControlValueAccessor {

  @Input() items: DropdownItem[];
  @Input() itemTemplate: TemplateRef<any>;
  @Input() set disabled(disabled: boolean) {
    this.isDisabled = disabled;
  }

  isOpen = false;
  isDisabled = false;

  private value: any;
  selectedItem: DropdownItem;

  onChanged = (value: any) => {};
  onTouched = () => {};

  @HostListener('focusout')
  onFocusout(): void {
    this.close();
  }

  constructor() { }

  ngOnInit(): void {
  }

  select(item: DropdownItem): void {
    if (!this.isDisabled) {
      this.selectedItem = item;
      this.value = item.key;
      this.onChanged(this.value);
      this.onTouched();
    }
  }

  toogle(): void {
    if (!this.isDisabled) {
      this.isOpen = !this.isOpen;
    }
  }

  close(): void {
    this.isOpen = false;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    this.close();
  }

  writeValue(value: any): void {
    this.value = value;
    this.selectedItem = this.items.find(item => item.key === value);
  }

}
