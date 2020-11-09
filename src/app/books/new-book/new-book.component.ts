import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BooksValidators } from '../books-validators';
import {BooksClientService} from '../books-client.service';
import {Router} from '@angular/router';
import {NewBookAsyncValidator} from '../new-book-async-validator';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  bookForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly booksClient: BooksClientService,
    private readonly router: Router,
    private readonly newBookValidator: NewBookAsyncValidator
  ) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      imageUrl: ['', BooksValidators.url()],
      isSoldOut: false
    }, {
      asyncValidators: this.newBookValidator.validate(),
      updateOn: 'blur'
    });
  }

  saveBook(): void {
    if (this.bookForm.valid) {
      this.booksClient.saveBook(this.bookForm.value).subscribe(
        () => {
          this.router.navigate(['/']);
        }
      );
    }
  }

}
