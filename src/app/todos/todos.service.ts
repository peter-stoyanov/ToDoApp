import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { UserService } from "../shared";
import { Todo } from "./todo.model";

@Injectable()
export class TodosService {
    todosChanged = new Subject<Todo[]>();

    private todos: Todo[] = [
        new Todo(
            'Copy the docs',
            'Make copies for all the needed docs for new job.',
            new Date(),
            false,
            this.userService.getCurrentUser()
        ),
        new Todo(
            'Buy food',
            'Buy salat and fruits for the week.',
            new Date(),
            false,
            this.userService.getCurrentUser()
        )
    ]

    constructor(private userService: UserService) {}

    getTodos(): Todo[] {
        return this.todos;
    }
}