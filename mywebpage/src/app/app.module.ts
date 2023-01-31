import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SolutionGridComponent } from './components/solution-grid/solution-grid.component';
import { Task1Component } from './components/tasks/task1/task1.component';
import { Wirframe1Component } from './components/tasks/task1/wirframe1/wirframe1.component';
import { Task2Component } from './components/tasks/task2/task2.component';
import { SurveyFormComponent } from './components/tasks/task2/wireframe1/survey-form/survey-form.component';
import { HeaderAufgabeComponent } from './components/tasks/task2/wireframe1/header-aufgabe/header-aufgabe.component';
import { PiccheckboxComponent } from './components/tasks/task2/wireframe1/piccheckbox/piccheckbox.component';
import { RespowithflexboxComponent } from './components/tasks/task3/responsive-with-flexbox/respowithflexbox/respowithflexbox.component';
import { BooksiteComponent } from './components/tasks/task3/booksite/booksite.component';
import { FunctionsComponent } from './components/tasks/task4/functions/functions.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { FunktionaleprogComponent } from './components/tasks/task7/funktionaleprog/funktionaleprog.component';
import { DomComponent } from './components/tasks/task5/dom/dom.component';
import { EcmaComponent } from './components/tasks/task6/ecma/ecma.component';
import { FetchComponent } from './components/tasks/task8/fetch/fetch.component';
import { TypescriptComponent } from './components/tasks/task10/typescript/typescript.component';
import { HomeComponent } from './components/home/home.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SolutionGridComponent,
    Task1Component,
    Wirframe1Component,
    Task2Component,
    SurveyFormComponent,
    HeaderAufgabeComponent,
    PiccheckboxComponent,
    RespowithflexboxComponent,
    BooksiteComponent,
    FunctionsComponent,
    FunktionaleprogComponent,
    DomComponent,
    EcmaComponent,
    FetchComponent,
    TypescriptComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    HighlightModule,
    PdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
