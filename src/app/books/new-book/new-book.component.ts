import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  bookForm = new FormGroup({
    name: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    imageUrl: new FormControl(''),
    isSoldOut: new FormControl(false),
  });

  constructor() { }

  ngOnInit(): void {
    this.bookForm.valueChanges.subscribe(value => console.log(value));
  }

}
