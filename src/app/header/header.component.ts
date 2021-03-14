import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword = '';
  isHighlight = false;
  fontSize = 12;

  constructor() { }

  ngOnInit(): void {

  }

  doSearch(event: MouseEvent) {
    console.log(event);
    this.keyword += '!';
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
