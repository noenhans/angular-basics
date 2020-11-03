import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('api/books');
  }
}
