import { User } from "../shared";

export class Todo {
    public id?: number;
    public title: string;
    public body: string;
    public dueDate: Date;
    public isDone: boolean;
    public owner: User;

    constructor(
        id: number = 0,
        title: string,
        body: string,
        dueDate: Date,
        isDone: boolean = false,
        owner: User    
    ) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.dueDate = dueDate;
        this.isDone = isDone;
        this.owner = owner
    }
}