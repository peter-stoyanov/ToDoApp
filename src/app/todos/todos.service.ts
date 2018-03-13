import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { UserService } from "../shared";
import { Todo } from "./todo.model";

@Injectable()
export class TodosService {
    todosChanged = new Subject<Todo[]>();

    private todos: Todo[] = [
        new Todo(
            1,
            'Copy the docs',
            'Make copies for all the needed docs for new job.',
            new Date(),
            false,
            this.userService.getCurrentUser()
        ),
        new Todo(
            2,
            'Buy food',
            'Buy salat and fruits for the week.',
            new Date(),
            false,
            this.userService.getCurrentUser()
        )
    ]

    constructor(private userService: UserService) {}

    getTodos(): Todo[] {
        return this.todos.slice();
    }

    getTodo(id: number): Todo | null {
        return id >= 0 && id < this.todos.length ? this.todos[id] : null;
    }

    add(todo: Todo) {
        todo.id = this.todos.length;
        this.todos.push(todo);
        this.todosChanged.next(this.todos.slice());
    }

    update(index: number, todo: Todo) {
        this.todos[index] = todo;
        this.todosChanged.next(this.todos.slice());

    }
}