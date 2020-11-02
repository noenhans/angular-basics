import {Component} from '@angular/core';

interface Book {
  name: string;
  author: string;
  imageUrl?: string;
  isSoldOut: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
