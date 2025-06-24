const h1 = document.querySelector("h1");
// const body = (h1.parentNode.parentNode);
// body.style.color = "efefef";
// body.style.backgroundColor = "#333";
const div = (h1.parentNode);
div.style.color = "efefef";
div.style.backgroundColor = "#333";

// for select head

const head = document.querySelector("head");
console.log(head);
const title = head.querySelector("title");
console.log(title);

const container = document.querySelector(".container");
console.log(container.children);