import { Component, OnInit, Input } from '@angular/core';
import { ContentData } from './content.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() redditContent: ContentData;

  ngOnInit() {
  }

  increment(): boolean {
    this.redditContent.increment();
    return false;
  }

  decrement(): boolean {
    this.redditContent.decrement();
    return false;
  }

}
