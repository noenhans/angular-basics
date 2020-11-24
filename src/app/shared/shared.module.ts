import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingInputComponent } from './star-rating-input/star-rating-input.component';



@NgModule({
  declarations: [StarRatingInputComponent],
  exports: [
    StarRatingInputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
