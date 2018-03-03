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
  AuthGuard,
  JwtService,
  UserService,
  SharedModule} from './shared';

  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AuthModule,
    SharedModule
  ],
  providers: [
    ApiService,
    AuthGuard,
    JwtService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
