import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  bookForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      name: '',
      author: '',
      imageUrl: '',
      isSoldOut: false
    });
  }

  saveBook(): void {
    console.log(this.bookForm.value);
  }

}
