/*        <li>
          <label for="task-1">Wyrzucić śmieci</label>
          <input type="checkbox" id="task-1" name="Wyrzucić śmieci" />
        </li>
      */

// Wyrzucić śmieci
// Pójść na siłownie
// Nakarmić koty

const tasksContainerElement = document.querySelector(".tasks") as HTMLElement;
const addButton = document.getElementById("add") as HTMLButtonElement;
const input = document.querySelector(".name") as HTMLInputElement;

const tasks: string[] = [
  "Wyrzucić śmieci",
  "Pójść na siłownie",
  "Nakarmić koty",
];

const render = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task) => {
    const taskElement = document.createElement("li");
    taskElement.textContent = task;
    tasksContainerElement.appendChild(taskElement);
  });
};
render();

addButton.addEventListener("click", () => {
  const task = input.value.trim();
  if (!task) return;
  tasks.push(task);
  input.value = "";
  render();
});
