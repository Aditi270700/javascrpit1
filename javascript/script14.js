// some old methods to supports poor IE

// appendChild;
// insertBefore;
// replaceChild;
// removeChild;

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// const referenceNode = document.querySelector(".first-todo");
// li.textContent = "aditi";
// ul.insertBefore(li,referenceNode);

const ul = document.querySelector(".todo-list");

// new element
const li = document.createElement("li");
li.textContent = "new todo";

const referenceNode = document.querySelector(".first-todo");
ul.removeChild(referenceNode);