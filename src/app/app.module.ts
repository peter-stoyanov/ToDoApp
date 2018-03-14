import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
  SharedModule,
  OrderByPipe} from './shared';
import { AuthGuard } from './auth/auth-guard.service';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { TodosService } from './todos/todos.service';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoEditComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
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
