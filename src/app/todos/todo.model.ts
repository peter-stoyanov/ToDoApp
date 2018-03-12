import { User } from "../shared";

export class Todo {
    public title: string;
    public body: string;
    public dueDate: Date;
    public isDone: boolean;
    public owner: User;

    constructor(
        title: string,
        body: string,
        dueDate: Date,
        isDone: boolean = false,
        owner: User    
    ) {
        this.title = title;
        this.body = body;
        this.dueDate = dueDate;
        this.isDone = isDone;
        this.owner = owner
    }
}