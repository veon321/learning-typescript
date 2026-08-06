"use strict";
const tasksContainerElement = document.querySelector(".tasks");
const addButton = document.getElementById("add");
const input = document.querySelector(".name");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const addText = document.getElementById("addtext");
const tasks = [
    { title: "Wyrzucić śmieci", done: false, category: "hobby" },
    { title: "Pójść na siłownie", done: true, category: "gym" },
    { title: "Nakarmić koty", done: false, category: "work" },
];
const categories = ["general", "work", "gym", "hobby"];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const id = `task-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerText = task.title;
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.title;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", () => {
            task.done = !task.done;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
const renderCategories = () => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "categories";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            selectedCategory = category;
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButton.addEventListener("click", (event) => {
    event.preventDefault();
    const selectedRadioElement = document.querySelector("input[type='radio']:checked");
    if (input.value.trim() === "" || !selectedRadioElement) {
        addText.textContent = "Wybierz opcje lub uzupelnij input!";
        throw new Error("No radio button selected or input");
    }
    addText.textContent = "Add";
    const task = input.value.trim();
    if (!task)
        return;
    addTask({
        title: input.value,
        done: false,
        category: selectedCategory,
    });
    input.value = "";
    render();
});
renderCategories();
render();
