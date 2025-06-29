// element.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin
// beforeend
// afterend

// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend", "<li>students</li>");

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("afterbegin","<li>students</li>");