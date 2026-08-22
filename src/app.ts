import { Task, Category } from "./types/types";
import { render } from "./helpers/render-tasks.helper";

const tasksContainerElement = document.querySelector(".tasks") as HTMLElement;
const addButton = document.getElementById("add") as HTMLButtonElement;
const input = document.querySelector(".name") as HTMLInputElement;
const categoriesContainerElement = document.querySelector(
  ".categories",
) as HTMLElement;
let selectedCategory: Category;
const addText = document.getElementById("addtext") as HTMLInputElement;

const tasks: Task[] = [
  { title: "Wyrzucić śmieci", done: false, category: "hobby" },
  { title: "Pójść na siłownie", done: true, category: "gym" },
  { title: "Nakarmić koty", done: true, category: "work" },
];

const categories: Category[] = ["general", "work", "gym", "hobby"];

const renderCategories = () => {
  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement("li");

    const radioInputElement: HTMLInputElement = document.createElement("input");
    radioInputElement.type = "radio";
    radioInputElement.name = "categories";
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;
    radioInputElement.addEventListener("change", () => {
      selectedCategory = category;
    });

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.setAttribute("for", `category-${category}`);
    labelElement.innerText = category;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelElement);

    categoriesContainerElement.appendChild(categoryElement);
  });
};

const addTask = (task: Task) => {
  tasks.push(task);
};

addButton.addEventListener("click", (event) => {
  event.preventDefault();

  const selectedRadioElement = document.querySelector<HTMLInputElement>(
    "input[type='radio']:checked",
  );
  const task = input.value.trim();

  if (task === "" || !selectedRadioElement) {
    addText.textContent = "Wybierz opcje lub uzupelnij input!";
    return;
  }

  addText.textContent = "";

  addTask({
    title: task,
    done: false,
    category: selectedCategory,
  });

  input.value = "";
  render(tasks, tasksContainerElement);
});

renderCategories();
render(tasks, tasksContainerElement);
