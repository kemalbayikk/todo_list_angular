import { TodoItem } from "./todoitem";

export class Model {
    name: string;
    items: TodoItem[];

    constructor() {
        this.name = "Faruk";
        this.items = [
            { description: "Kahvaltı", action: true , index: 1},
            { description: "Alışveriş", action: false ,index:  2},
            { description: "Spor", action: true , index: 3},
        ];
    }
}