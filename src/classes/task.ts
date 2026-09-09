import { Category } from "../types/types.js";

export class TaskClass {
  name: string = "Nowe zadanie";
  done: boolean = true;
  category?: Category;
  createdAt: Date;

  constructor(
    name: string,
    done: boolean,
    category: Category = Category.GENERAL,
  ) {
    this.name = name;
    this.done = done;
    this.category = this.category;
    this.createdAt = new Date();
  }
  logCreationDate(extra: string) {
    console.log(`Task został stworzony ${this.createdAt} ${extra}` || "");
  }
}
