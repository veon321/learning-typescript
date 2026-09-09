import { Category } from "./types/types.js";
import { render as renderTasks } from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helpers.js";
import { TaskClass } from "./classes/task.js";
const tasksContainerElement = document.querySelector(".tasks");
const addButton = document.getElementById("add");
const input = document.querySelector(".name");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const addText = document.getElementById("addtext");
const tasks = [
    { title: "Wyrzucić śmieci", done: false, category: Category.HOBBY },
    { title: "Pójść na siłownie", done: true, category: Category.GYM },
    { title: "Nakarmić koty", done: true, category: Category.WORK },
];
const categories = [
    Category.GENERAL,
    Category.WORK,
    Category.GYM,
    Category.HOBBY,
    Category.SOCIAL,
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButton.addEventListener("click", (event) => {
    event.preventDefault();
    const selectedRadioElement = document.querySelector("input[type='radio']:checked");
    const task = input.value.trim();
    if (task === "" || !selectedRadioElement) {
        addText.textContent = "Wybierz opcje lub uzupelnij input!";
        return;
    }
    addText.textContent = "Add";
    addTask({
        title: task,
        done: false,
        category: selectedCategory,
    });
    input.value = "";
    renderTasks(tasks, tasksContainerElement);
});
const task = ["zrobić klatkę", Category.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];
addTask({ title: taskName, category: taskCategory, done: taskDoneStatus });
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
const TaskClassInstance = new TaskClass("Zadanie z constructora", false);
