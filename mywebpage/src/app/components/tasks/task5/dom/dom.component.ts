import { Component, AfterViewInit } from '@angular/core';
import hljs from 'highlight.js';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.css'],
})
export class DomComponent implements AfterViewInit {
  ngAfterViewInit() {
    const blocks = document.getElementsByTagName('code');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  }
}
