import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingInputComponent } from './star-rating-input.component';

describe('StarRatingInputComponent', () => {
  let component: StarRatingInputComponent;
  let fixture: ComponentFixture<StarRatingInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarRatingInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarRatingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
