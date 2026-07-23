"use strict";
/*        <li>
          <label for="task-1">Wyrzucić śmieci</label>
          <input type="checkbox" id="task-1" name="Wyrzucić śmieci" />
        </li>
      */
// Wyrzucić śmieci
// Pójść na siłownie
// Nakarmić koty
const tasksContainerElement = document.querySelector(".tasks");
const addButton = document.getElementById("add");
const input = document.querySelector(".name");
const tasks = ["Wyrzucić śmieci", "Pójść na siłownie", "Nakarmić koty"];
const render = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task) => {
    const taskElement = document.createElement("li");
    taskElement.textContent = task;
    tasksContainerElement.appendChild(taskElement);
  });
};
render();
addButton.addEventListener("click", (event) => {
  const task = input.value.trim();
  event.preventDefault();
  if (!task) return;
  tasks.push(task);
  input.value = "";
  render();
});
