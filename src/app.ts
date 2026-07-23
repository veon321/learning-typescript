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

const addTask = (task: string) => {
  tasks.push(task);
};

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  addTask(input.value);
  input.value = "";
  render();
});
