import { Component, AfterViewInit } from '@angular/core';
import hljs from 'highlight.js';

@Component({
  selector: 'app-ecma',
  templateUrl: './ecma.component.html',
  styleUrls: ['./ecma.component.css'],
})
export class EcmaComponent implements AfterViewInit {
  ngAfterViewInit() {
    const blocks = document.getElementsByTagName('code');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  }
}
