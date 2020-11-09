import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BooksValidators} from '../books-validators';
import {BooksAsyncValidators} from '../books-async-validators';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  bookForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private booksAsyncValidators: BooksAsyncValidators
  ) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      author: ['', Validators.required],
      imageUrl: ['', BooksValidators.url()],
      isSoldOut: false
    }, {
      asyncValidators: this.booksAsyncValidators.bookAlreadyExists(),
      updateOn: 'blur'
    });
  }

  saveBook(): void {
    console.log(this.bookForm.value);
  }


}
