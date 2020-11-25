import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingInputComponent } from './star-rating-input/star-rating-input.component';



@NgModule({
  declarations: [StarRatingInputComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StarRatingInputComponent
  ]
})
export class SharedModule { }
