
export class TodoItem {
    description: string;
    action: boolean;
    index: number;

    constructor(description: string, action: boolean, index:number) {
        this.description = description;
        this.action = action;
        this.index = index;
    }
}