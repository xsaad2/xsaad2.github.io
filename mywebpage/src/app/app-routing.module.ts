import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SolutionGridComponent } from './components/solution-grid/solution-grid.component';
import { Task1Component } from './components/tasks/task1/task1.component';
import { Wirframe1Component } from './components/tasks/task1/wirframe1/wirframe1.component';
import { TypescriptComponent } from './components/tasks/task10/typescript/typescript.component';
import { HeaderAufgabeComponent } from './components/tasks/task2/wireframe1/header-aufgabe/header-aufgabe.component';
import { PiccheckboxComponent } from './components/tasks/task2/wireframe1/piccheckbox/piccheckbox.component';
import { SurveyFormComponent } from './components/tasks/task2/wireframe1/survey-form/survey-form.component';
import { BooksiteComponent } from './components/tasks/task3/booksite/booksite.component';
import { RespowithflexboxComponent } from './components/tasks/task3/responsive-with-flexbox/respowithflexbox/respowithflexbox.component';
import { FunctionsComponent } from './components/tasks/task4/functions/functions.component';
import { DomComponent } from './components/tasks/task5/dom/dom.component';
import { EcmaComponent } from './components/tasks/task6/ecma/ecma.component';
import { FunktionaleprogComponent } from './components/tasks/task7/funktionaleprog/funktionaleprog.component';
import { FetchComponent } from './components/tasks/task8/fetch/fetch.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'solutions', component: SolutionGridComponent },
  { path: 'task1', component: Task1Component },
  { path: 'task1frame', component: Wirframe1Component },
  { path: 'wireframe1', component: Wirframe1Component },
  { path: 'fccsurvey', component: SurveyFormComponent },
  { path: 'dynheader', component: HeaderAufgabeComponent },
  { path: 'piccheckbox', component: PiccheckboxComponent },
  { path: 'respowithflexbox', component: RespowithflexboxComponent },
  { path: 'booksite', component: BooksiteComponent },
  { path: 'javascript', component: FunctionsComponent },
  { path: 'functionalprog', component: FunktionaleprogComponent },
  { path: 'dom', component: DomComponent },
  { path: 'ecma', component: EcmaComponent },
  { path: 'fetch', component: FetchComponent },
  { path: 'typescript', component: TypescriptComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
