import { Component } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-solution-grid',
  templateUrl: './solution-grid.component.html',
  styleUrls: ['./solution-grid.component.css'],
})
export class SolutionGridComponent {
  public sources: Task[] = [
    {
      image: 'eich',
      desc: 'description 1',
    },
    {
      image: 'respomitgrid',
      desc: 'description 1',
    },
    {
      image: 'flexbox',
      desc: 'description 1',
    },
    {
      image: 'button',
      desc: 'description 1',
    },
    {
      image: 'wireframe2',
      desc: 'freeCodeCamp survey form',
    },
  ];
}
