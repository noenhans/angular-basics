import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingInputComponent } from './star-rating-input/star-rating-input.component';
import { DropdownComponent } from './dropdown/dropdown.component';



@NgModule({
  declarations: [StarRatingInputComponent, DropdownComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StarRatingInputComponent,
    DropdownComponent
  ]
})
export class SharedModule { }
