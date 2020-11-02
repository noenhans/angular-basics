import { Component, OnInit } from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.scss']
})
export class BooksOverviewComponent {

  books: Book[] = [
    {
      name: 'Harry Potter i Kamień Filozoficzny',
      author: 'J.K. Rowling',
      imageUrl: 'https://ecsmedia.pl/c/harry-potter-i-kamien-filozoficzny-tom-1-w-iext43794838.jpg',
      isSoldOut: false
    },
    {
      name: 'Harry Potter i Komnata Tajemnic',
      author: 'J.K. Rowling',
      imageUrl: 'https://ecsmedia.pl/c/harry-potter-i-komnata-tajemnic-tom-2-w-iext43244666.jpg',
      isSoldOut: false
    },
    {
      name: 'Harry Potter i Więzień Azkabanu',
      author: 'J.K. Rowling',
      imageUrl: 'https://ecsmedia.pl/c/harry-potter-i-wiezien-azkabanu-tom-3-w-iext43244650.jpg',
      isSoldOut: true
    },
    {
      name: 'Pacjentka',
      author: 'Michaelides Alex',
      imageUrl: 'https://ecsmedia.pl/c/pacjentka-w-iext53973814.jpg',
      isSoldOut: false
    },
    {
      name: 'Za Zamkniętymi drzwiami',
      author: 'B.A. Paris',
      imageUrl: 'https://ecsmedia.pl/c/za-zamknietymi-drzwiami-w-iext47030382.jpg',
      isSoldOut: false
    }
  ];

  viewMode: 'table' | 'list' = 'list';

  toogleView(): void {
    this.viewMode = this.viewMode === 'table' ? 'list' : 'table';
  }
}
