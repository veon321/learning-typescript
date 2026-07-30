const tasksContainerElement = document.querySelector(".tasks") as HTMLElement;
const addButton = document.getElementById("add") as HTMLButtonElement;
const input = document.querySelector(".name") as HTMLInputElement;

interface Task {
  title: string;
  done: boolean;
  category: string;
}

const tasks: Task[] = [
  { title: "Wyrzucić śmieci", done: false, category: "general" },
  { title: "Pójść na siłownie", done: true, category: "general" },
  { title: "Nakarmić koty", done: false, category: "general" },
];

const categories: string[] = ["general", "work", "gym", "hobby"];

const render = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement = document.createElement("li");

    const id: string = `task-${index}`;
    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.innerText = task.title;
    labelElement.setAttribute("for", id);

    const checkboxElement: HTMLInputElement = document.createElement("input");
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
render();

const addTask = (task: Task) => {
  tasks.push(task);
};

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const task = input.value.trim();
  if (!task) return;
  addTask({ title: task, done: false });
  input.value = "";
  render();
});
