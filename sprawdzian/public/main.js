"use strict";
const addButton = document.querySelector("#todoAddButton");
const inputTextField = document.querySelector("#todoInputField");
const todosContainer = document.querySelector("#todoContainer");
let arrayOfTodos = [];
if (addButton && inputTextField && todosContainer) {
    addButton?.addEventListener('click', (e) => {
        let textValue = inputTextField.value;
        arrayOfTodos.push({ id: arrayOfTodos.length, title: textValue, status: textValue });
        inputTextField.value = '';
        buildList();
    });
}
function buildList() {
    todosContainer.innerHTML = "";
    arrayOfTodos.forEach(element => {
        let container = document.createElement("div");
        container.classList.add("card-body", "card", "shadow");
        let id = document.createElement('p');
        id.classList.add("small");
        let title = document.createElement('h3');
        title.classList.add("h3");
        let button = document.createElement('button');
        button.classList.add("button", "bg-danger", "rounded", "text-white");
        let select = document.createElement('select');
        select.classList.add("bg-warning");
        let option1 = document.createElement('option');
        option1.classList.add("bg-warning", "text-black");
        let option2 = document.createElement('option');
        option2.classList.add("bg-warning", "text-black");
        let option3 = document.createElement('option');
        option3.classList.add("bg-warning", "text-black");
        let status = document.createElement('p');
        status.classList.add("small");
        id.textContent = "id: " + element.id;
        title.textContent = "tytul: " + element.title;
        button.innerText = "delete";
        option1.innerText = "ToDo";
        option2.innerText = "Doing";
        option3.innerText = "Done";
        status.textContent = element.status;
        select.addEventListener('change', (e) => {
            element.status = select.value;
            buildList();
        });
        button.addEventListener('click', (e) => {
            container.remove();
            arrayOfTodos = arrayOfTodos.filter((item) => item.id !== element.id);
        });
        container.appendChild(id);
        container.appendChild(title);
        container.appendChild(button);
        container.appendChild(select);
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        todosContainer?.appendChild(container);
    });
}
