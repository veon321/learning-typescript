const tasksContainerElement = document.querySelector(".tasks") as HTMLElement;
const addButton = document.getElementById("add") as HTMLButtonElement;
const input = document.querySelector(".name") as HTMLInputElement;

const tasks: {
  name: string;
  dane: boolean;
}[] = [
  { name: "Wyrzucić śmieci", dane: false },
  { name: "Pójść na siłownie", dane: false },
  { name: "Nakarmić koty", dane: false },
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

const addTask = (task: string) => {
  tasks.push(task);
};

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const task = input.value.trim();
  if (!task) return;
  addTask(task);
  input.value = "";
  render();
});
