import { TodoItem } from "./todoitem";

export class Model {
    name: string;
    items: TodoItem[];

    constructor() {
        this.name = "Faruk";
        this.items = [
            { description: "Kahvaltı", action: true },
            { description: "Alışveriş", action: false },
            { description: "Spor", action: true},
        ];
    }
}