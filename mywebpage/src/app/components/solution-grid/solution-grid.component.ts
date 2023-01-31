import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-solution-grid',
  templateUrl: './solution-grid.component.html',
  styleUrls: ['./solution-grid.component.css'],
})
export class SolutionGridComponent {
  constructor(router: Router) {}
  public sources: Task[] = [
    {
      image: 'eich',
      desc: '1.4. HTML Wireframe',
      link: 'assets/frames/wireframe1.html',
    },
    {
      image: 'dynheader',
      desc: '2.2. CSS-Positionierung Dynamic header ',
      link: '/dynheader',
    },
    {
      image: 'checkbox',
      desc: '2.2. CSS-Positionierung Checkbox',
      link: '/piccheckbox',
    },
    {
      image: 'wireframe2',
      desc: '2.3. Wireframe mit HTML und CSS',
      link: 'assets/frames/wireframe2.html',
    },
    {
      image: 'flexbox',
      desc: '3.1. Responsiv mit Flexbox Desktop-First',
      link: 'assets/frames/flexbox.html',
    },
    {
      image: 'respomitgrid',
      desc: '3.3. Responsiv mit Grid',
      link: 'assets/frames/respomitgrid.html',
    },
    {
      image: 'dom',
      desc: '5.2. Rednerliste',
      link: 'assets/frames/dom2.html',
    },
    {
      image: 'topsort',
      desc: '5.3. TopSort als Web-App',
      link: 'assets/frames/topsort.html',
    },
    {
      image: 'klammer',
      desc: '6.1. Klammerpaare',
      link: 'assets/frames/brackets.html',
    },
    {
      image: 'promises',
      desc: '8.1. Promises',
      link: 'assets/frames/fetch.html',
    },
    {
      image: 'svg',
      desc: '9.1. SVG Grafik von Hand erstellen',
      link: 'assets/frames/svg.html',
    },
  ];

  onClick(link: string) {
    window.open(link);
  }
}
