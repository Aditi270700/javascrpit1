// static list vs live list

// static list
// queryselectorAll give static list
// const listItems = document.querySelectorAll(".todo-list li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthLi);
// console.log(listItems);

// live list

// getElementBySomething give live list
const ul = document.querySelector(".todo-list");
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
const listItems = ul.getElementsByTagName("li");
ul.append(sixthLi);
console.log(listItems);

