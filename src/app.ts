const tasksContainerElement = document.querySelector(".tasks") as HTMLElement;
const addButton = document.getElementById("add") as HTMLButtonElement;
const input = document.querySelector(".name") as HTMLInputElement;
const categoriesContainerElement = document.querySelector(
  ".categories",
) as HTMLElement;
let selectedCategory: Category;
const addText = document.getElementById("addtext") as HTMLInputElement;

type Category = "general" | "work" | "gym" | "hobby";

interface Task {
  title: string;
  done: boolean;
  category?: Category;
}

const tasks: Task[] = [
  { title: "Wyrzucić śmieci", done: false, category: "hobby" },
  { title: "Pójść na siłownie", done: true, category: "gym" },
  { title: "Nakarmić koty", done: false, category: "workk" },
];

const categories: Category[] = ["general", "work", "gym", "hobby"];

const render = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement = document.createElement("li");
    if (task.category) {
      taskElement.classList.add(task.category);
    }
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

const renderCategories = () => {
  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement("li");

    const radioInputElement: HTMLInputElement = document.createElement("input");
    radioInputElement.type = "radio";
    radioInputElement.name = "categories";
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;
    radioInputElement.addEventListener("change", () => {
      selectedCategory = category;
    });

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.setAttribute("for", `category-${category}`);
    labelElement.innerText = category;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelElement);

    categoriesContainerElement.appendChild(categoryElement);
  });
};

const addTask = (task: Task) => {
  tasks.push(task);
};

addButton.addEventListener("click", (event) => {
  event.preventDefault();

  const selectedRadioElement = document.querySelector<HTMLInputElement>(
    "input[type='radio']:checked",
  );
  const task = input.value.trim();

  if (task === "" || !selectedRadioElement) {
    addText.textContent = "Wybierz opcje lub uzupelnij input!";
    return;
  }

  addText.textContent = "";

  addTask({
    title: task,
    done: false,
    category: selectedCategory,
  });

  input.value = "";
  render();
});

renderCategories();
render();
