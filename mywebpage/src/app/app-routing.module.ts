import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SolutionGridComponent } from './components/solution-grid/solution-grid.component';
import { Task1Component } from './components/tasks/task1/task1.component';
import { Wirframe1Component } from './components/tasks/task1/wirframe1/wirframe1.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'solutions', component: SolutionGridComponent },
  { path: 'task1', component: Task1Component },
  { path: 'wireframe1', component: Wirframe1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
