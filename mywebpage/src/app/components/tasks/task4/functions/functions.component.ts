import { Component, AfterViewInit } from '@angular/core';
import hljs from 'highlight.js';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css'],
})
export class FunctionsComponent implements AfterViewInit {
  ngAfterViewInit() {
    const blocks = document.getElementsByTagName('code');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  }
}
