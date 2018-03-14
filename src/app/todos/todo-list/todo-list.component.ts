import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../todo.model';
import { TodosService } from '../todos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  
  todos: Todo[];

  private subscription: Subscription;

  constructor(
    private todosService: TodosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.todosService.getTodos().subscribe(
      (data: Todo[]) => {
        console.log(data);
        this.todos = data;
      }
    );


    this.subscription = this.todosService.todosChanged
      .subscribe(
        (todos: Todo[]) => {
          this.todos = todos;
        }
      )
  }

  onNewTodo() {
    this.router.navigate(['/todos/new']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
