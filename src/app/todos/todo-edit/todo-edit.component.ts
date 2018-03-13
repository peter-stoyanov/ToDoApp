import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodosService } from '../todos.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';
import { UserService } from '../../shared';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  private id: number;
  private todo: Todo = new Todo(0,'','', new Date(),false,null);
  private editMode: boolean = false;
  
  constructor(
    private todosService: TodosService,
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UserService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          console.log(params)
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          if (this.editMode) {
            this.todo = this.todosService.getTodo(this.id);
          }
        }
      );
  }

  onSubmit(form: NgForm) {
    const todo = new Todo(
      this.id,
      form.value['title'],
      form.value['body'],
      form.value['dueDate'],
      false,
      this.usersService.getCurrentUser()
  )

    if (this.editMode) {
      this.todosService.update(this.id, todo);
    } else {
      this.todosService.add(todo);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['/todos']);
  }
}
