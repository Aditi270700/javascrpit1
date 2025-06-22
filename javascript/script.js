// DOM
//  document object model
// it is like tree structure of html block elements
// overview
// console.log(window.document);
// console.dir(window.document);

// select element using get element by id
// getElementById is used select only Id
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);

// select element using query selector
// it is used to select anything
// but Id select is one time but class is many select

const mai = document.querySelector("#mainHeading");
const heading = document.querySelector(".form-group")
console.log(heading);
console.log(mai);
