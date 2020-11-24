import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {DropdownItem} from './dropdown-item';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() dropdownItemTemplate: TemplateRef<any>;
  @Input() items: DropdownItem[];

  selectedItem: DropdownItem;
  isOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  toogleDropdown(): void {
    this.isOpened = !this.isOpened;
  }

  select(item: DropdownItem): void {
    this.selectedItem = item;
    this.isOpened = false;
  }
}
