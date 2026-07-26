"use strict";
const tasksContainerElement = document.querySelector(".tasks");
const addButton = document.getElementById("add");
const input = document.querySelector(".name");
const tasks = [
    { name: "Wyrzucić śmieci", done: false },
    { name: "Pójść na siłownie", done: true },
    { name: "Nakarmić koty", done: false },
];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        const id = `task-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.name;
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
render();
const addTask = (taskName) => {
    tasks.push({ name: taskName, done: false });
};
addButton.addEventListener("click", (event) => {
    event.preventDefault();
    const task = input.value.trim();
    if (!task)
        return;
    addTask(task);
    input.value = "";
    render();
});
