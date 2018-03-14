import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import * as firebase from 'firebase';

import { UserService } from "../shared";
import { Todo } from "./todo.model";
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class TodosService {
    todosChanged = new Subject<Todo[]>();
    private baseDbPath: string = 'todos/'

    private todos: Todo[] = [
        new Todo(
            'aaz',
            'Copy the docs',
            'Make copies for all the needed docs for new job.',
            new Date(),
            false
        ),
        new Todo(
            'zze',
            'Buy food',
            'Buy salat and fruits for the week.',
            new Date(),
            false
        )
    ]

    constructor(
        private userService: UserService,
        private db: AngularFireDatabase
    ) { }

    private getDbPathForCurrentUser(): string {
        return this.baseDbPath + firebase.auth().currentUser;
        
    }

    getTodos(): Observable<Todo[]> {
        //return this.todos.slice();
        
        return this.db
            .list(this.getDbPathForCurrentUser())
            .valueChanges()
            .map(Todo.fromJsonList);
    }

    getTodo(id: string): Todo | null {
        // id = id - 1;
        // return id >= 0 && id < this.todos.length ? this.todos[id] : null;
        return null;
    }

    add(todo: Todo) {
        // todo.id = this.todos.length;
        // this.todos.push(todo);
        // this.todosChanged.next(this.todos.slice());
        
        this.db.list(this.getDbPathForCurrentUser()).push(todo);
    }

    update(index: string, todo: Todo) {
        // this.todos[index - 1] = todo;
        // this.todosChanged.next(this.todos.slice());

    }
}