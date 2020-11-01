import { Component } from '@angular/core';

interface Book {
  title: string;
  author: string;
  imgUrl?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books: Book[] = [
    {
      title: 'Harry Potter i Kamień Filozoficzny',
      author: 'J.K. Rowling',
      imgUrl: 'https://ecsmedia.pl/c/harry-potter-i-kamien-filozoficzny-tom-1-w-iext43794838.jpg'
    },
    {
      title: 'Harry Potter i Komnata Tajemnic',
      author: 'J.K. Rowling',
      imgUrl: 'https://ecsmedia.pl/c/harry-potter-i-komnata-tajemnic-tom-2-w-iext43244666.jpg'
    },
    {
      title: 'Harry Potter i Więzień Azkabanu',
      author: 'J.K. Rowling',
      imgUrl: 'https://ecsmedia.pl/c/harry-potter-i-wiezien-azkabanu-tom-3-w-iext43244650.jpg'
    },
    {
      title: 'Pacjentka',
      author: 'Michaelides Alex',
      imgUrl: 'https://ecsmedia.pl/c/pacjentka-w-iext53973814.jpg'
    },
    {
      title: 'Za Zamkniętymi drzwiami',
      author: 'B.A. Paris',
      imgUrl: 'https://ecsmedia.pl/c/za-zamknietymi-drzwiami-w-iext47030382.jpg'
    }
  ];
}
