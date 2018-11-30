import { Component, Output, Input } from '@angular/core';
import { ContentData } from './content/content.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  redditContent: ContentData[];

  constructor() {
    this.redditContent = [];
  }

}
