const tasksContainerElement = document.querySelector(".tasks") as HTMLElement;
const addButton = document.getElementById("add") as HTMLButtonElement;
const input = document.querySelector(".name") as HTMLInputElement;

const tasks: {
  name: string;
  done: boolean;
}[] = [
  { name: "Wyrzucić śmieci", done: false },
  { name: "Pójść na siłownie", done: true },
  { name: "Nakarmić koty", done: false },
];

const render = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement = document.createElement("li");

    const id: string = `task-${index}`;
    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.innerText = task.name;
    labelElement.setAttribute("for", id);

    const checkboxElement: HTMLInputElement = document.createElement("input");
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

const addTask = (taskName: string) => {
  tasks.push({ name: taskName, done: false });
};

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const task = input.value.trim();
  if (!task) return;
  addTask(task);
  input.value = "";
  render();
});
