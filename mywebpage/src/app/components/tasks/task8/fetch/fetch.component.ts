import { Component, AfterViewInit } from '@angular/core';
import hljs from 'highlight.js';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css'],
})
export class FetchComponent implements AfterViewInit {
  ngAfterViewInit() {
    const blocks = document.getElementsByTagName('code');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  }
}
