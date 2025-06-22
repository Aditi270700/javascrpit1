// get multiple elements using getElements by class name
// get multiple elements items using queryselector

const navItems = document.getElementsByClassName("nav-item");//html collection
console.log(navItems);
console.log(navItems[1]);
// const navItems = document.querySelectorAll(".nav-items");//nodelist
// console.log(navItems);
console.log(Array.isArray(navItems));
