import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { 
  HeaderComponent, 
  FooterComponent, 
  ShowAuthedDirective, 
  ErrorListComponent, 
  ApiService,
  JwtService,
  UserService,
  SharedModule} from './shared';
import { AuthGuard } from './auth/auth-guard.service';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { TodosService } from './todos/todos.service';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import { FormsModule } from '@angular/forms';

  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    SharedModule
  ],
  providers: [
    ApiService,
    AuthGuard,
    JwtService,
    UserService,
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
