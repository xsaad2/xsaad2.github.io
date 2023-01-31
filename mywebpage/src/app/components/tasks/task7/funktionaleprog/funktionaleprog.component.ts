import { Component, AfterViewInit } from '@angular/core';
import hljs from 'highlight.js';
@Component({
  selector: 'app-funktionaleprog',
  templateUrl: './funktionaleprog.component.html',
  styleUrls: ['./funktionaleprog.component.css'],
})
export class FunktionaleprogComponent implements AfterViewInit {
  ngAfterViewInit() {
    const blocks = document.getElementsByTagName('code');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  }
}
