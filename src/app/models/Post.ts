import { Category } from "../enum";

export class Post {
    id: number;
    name: string;
    description: string;
    abstract: string;
    category: Category;
    dateAndHour: Date;

    constructor() {
        this.id = 0;
        this.name = "";
        this.description = "";
        this.abstract = "";
        this.category = Category.NENHUMA;
        this.dateAndHour = new Date();
    }
}