import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule, HeaderComponent, FooterComponent, ShowAuthedDirective } from './shared';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TodoListComponent } from './todos/todo-list/todo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShowAuthedDirective,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
