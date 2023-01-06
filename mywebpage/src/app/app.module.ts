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

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SolutionGridComponent,
    Task1Component,
    Wirframe1Component,
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
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
