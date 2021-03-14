import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword = '';
  isHighlight = false;
  fontSize = 12;

  @Output() searchClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  doSearch(event: MouseEvent) {
    this.searchClick.emit(this.keyword);
    console.log(event);
    // this.keyword += '!';
    this.isHighlight = !this.isHighlight;
    this.fontSize += 2;
  }

  keywordInput(event: InputEvent) {
    console.log(event);
  }

  wrapInput(element: HTMLInputElement) {
    return element;
  }

}
