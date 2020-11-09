import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  bookForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    author: new FormControl(''),
    imageUrl: new FormControl(''),
    isSoldOut: new FormControl(false),
  });

  constructor() { }

  ngOnInit(): void {
  }

  saveBook(): void {
    console.log(this.bookForm.value);
  }

}
