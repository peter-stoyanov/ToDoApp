import { User } from "../shared";

export class Todo {
    public id?: string;
    public title: string;
    public body: string;
    public dueDate: Date;
    public isDone: boolean;
    //public owner: User;

    constructor(
        id: string = '',
        title: string,
        body: string,
        dueDate: Date,
        isDone: boolean = false,
        //owner: User    
    ) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.dueDate = dueDate;
        this.isDone = isDone;
        //this.owner = owner
    }

    static fromJsonList(objects): Todo[] {
        //return array.map(json => Todo.fromJson(json))
        let todos: Array<Todo> = new Array();
        
        for (let key in objects) {
            let object = objects[key];
            let product = Todo.fromJson(object);
            
            todos.push(product);
        }
        return todos;
    }

    static fromJson({ id, title, body, dueDate, isDone }): Todo {
        return new Todo(
            id,
            title,
            body,
            new Date(dueDate),
            isDone
        );
    }
           
}