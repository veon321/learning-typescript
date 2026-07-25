const tasksContainerElement = document.querySelector(".tasks") as HTMLElement;
const addButton = document.getElementById("add") as HTMLButtonElement;
const input = document.querySelector(".name") as HTMLInputElement;

const tasks: {
  name: string;
  done: boolean;
}[] = [
  { name: "Wyrzucić śmieci", done: false },
  { name: "Pójść na siłownie", done: false },
  { name: "Nakarmić koty", done: false },
];

const render = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task) => {
    const taskElement = document.createElement("li");
    taskElement.textContent = task.name;
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
