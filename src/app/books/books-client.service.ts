import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
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

  saveBooks(book: Book): Observable<Book> {
    return this.httpClient.post<Book>('api/books', book);
  }

  updateBooks(books: Book[]): Observable<Book[]> {
    const updateRequests = books.map(book => this.httpClient.patch<Book>(`api/books/${book.id}`, book));
    return forkJoin(updateRequests);
  }
}
