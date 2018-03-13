import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { AuthGuard } from './auth/auth-guard.service';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import { NotFoundComponent } from './shared';


const appRoutes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'todos', component: TodoListComponent, 
    children: [
      { path: 'new', component: TodoEditComponent, data: { title: 'Create ToDo' } },
      //{ path: ':id', component: RecipeDetailComponent },
      { path: 'edit/:id', component: TodoEditComponent}
    ]
  },
  { path: 'not-found',  component: NotFoundComponent},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
