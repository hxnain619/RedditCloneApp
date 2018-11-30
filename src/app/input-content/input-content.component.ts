import { Component, OnInit, Input } from '@angular/core';
import { ContentData } from '../content/content.model';

@Component({
  selector: 'app-input-content',
  templateUrl: './input-content.component.html',
  styleUrls: ['./input-content.component.css']
})
export class InputContentComponent implements OnInit {
  @Input() redditContent : ContentData[];

  ngOnInit(){
  }

  AddContent(title: HTMLInputElement, link: HTMLInputElement) {
    this.redditContent.push(new ContentData(title.value, link.value, 0));
    title.value = '';
    link.value = '';
  }
}
