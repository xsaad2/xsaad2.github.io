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
      desc: 'task1',
      link: '/task1',
    },
    {
      image: 'respomitgrid',
      desc: 'description 1',
      link: '',
    },
    {
      image: 'flexbox',
      desc: 'description 1',
      link: '',
    },
    {
      image: 'button',
      desc: 'description 1',
      link: '',
    },
    {
      image: 'wireframe2',
      desc: 'freeCodeCamp survey form',
      link: '',
    },
  ];

  onclick(task: string): void {}
}
