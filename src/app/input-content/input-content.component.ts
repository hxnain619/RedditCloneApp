import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ContentData } from '../content/content.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-input-content',
  templateUrl: './input-content.component.html',
  styleUrls: ['./input-content.component.css']
})
export class InputContentComponent implements OnInit {
  @Input() redditContent : ContentData[];

  AddContent(title: HTMLInputElement, link: HTMLInputElement) {
    this.redditContent.push(new ContentData(title.value, link.value, 0));
    title.value = '';
    link.value = '';
  }


  ngOnInit(){
  }

}
