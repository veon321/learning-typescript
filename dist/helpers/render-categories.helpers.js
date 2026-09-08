import { Category } from "../types/types.js";
const handleCategoryChange = (category) => {
    if (category == Category.GENERAL) {
        console.log("Zmiana na general");
    }
    else if (category == Category.GYM) {
        alert("gym");
    }
    else if (category == Category.HOBBY) {
        document.body.style.background = "red";
    }
    else if (category == Category.WORK) {
        console.log("Zmiana na work");
        alert("praca");
        document.body.style.background = "green";
    }
    else if (category === Category.SOCIAL) {
        console.log("sss");
    }
    else {
        const never = category;
        console.log(never);
    }
};
export const render = (categories, categoriesContainerElement, inputChangeCallback) => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "categories";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            inputChangeCallback(category);
            handleCategoryChange(category);
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
