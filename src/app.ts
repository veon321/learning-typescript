/*        <li>
          <label for="task-1">Wyrzucić śmieci</label>
          <input type="checkbox" id="task-1" name="Wyrzucić śmieci" />
        </li>
      */

// Wyrzucić śmieci
// Pójść na siłownie
// Nakarmić koty

const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const addButton: HTMLElement = document.getElementById("add");
const input: HTMLElement = document.querySelector(".name");

const tasks: string[] = [
  "Wyrzucić śmieci",
  "Pójść na siłownie",
  "Nakarmić koty",
];

const render = () => {
  tasks.forEach((task) => {
    const taskElement: HTMLElement = document.createElement("li");
    taskElement.innerHTML = task;
    tasksContainerElement.appendChild(taskElement);
  });
};
render();

addButton.addEventListener("click", () => {
  const task: string = input.textContent;
  tasks.push(task);
  input.value = "";
  render();
});
