import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BooksValidators} from '../books-validators';
import {BooksAsyncValidators} from '../books-async-validators';
import {BooksClientService} from '../books-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  bookForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private booksAsyncValidators: BooksAsyncValidators,
    private booksClient: BooksClientService,
    private router: Router
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
    if (this.bookForm?.valid) {
      this.booksClient.saveBooks(this.bookForm.value).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }


}
