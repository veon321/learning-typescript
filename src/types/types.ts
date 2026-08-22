export interface Task {
  title: string;
  done: boolean;
  category?: Category;
}

export type Category = "generall" | "work" | "gym" | "hobby";
