// document.createElement()
// append
// prepend
// remove

// append add elements last
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem); // we use after
// console.log(newTodoItem);

// prepend add elements first
const newTodoItem = document.querySelector("li")
newTodoItem.textContent = "students";
const todoList = document.querySelector(".todo-list");
todoList.prepand(newTodoItem); // we use before
console.log(newTodoItem);

// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1);
