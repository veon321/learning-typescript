import { render } from "./helpers/render-tasks.helper";
const tasksContainerElement = document.querySelector(".tasks");
const addButton = document.getElementById("add");
const input = document.querySelector(".name");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const addText = document.getElementById("addtext");
const tasks = [
    { title: "Wyrzucić śmieci", done: false, category: "hobby" },
    { title: "Pójść na siłownie", done: true, category: "gym" },
    { title: "Nakarmić koty", done: true, category: "work" },
];
const categories = ["general", "work", "gym", "hobby"];
const renderCategories = () => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "categories";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            selectedCategory = category;
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButton.addEventListener("click", (event) => {
    event.preventDefault();
    const selectedRadioElement = document.querySelector("input[type='radio']:checked");
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
    render(tasks, tasksContainerElement);
});
renderCategories();
render(tasks, tasksContainerElement);
