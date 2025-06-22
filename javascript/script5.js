// we can't use forEach method to iterate through HTMLCollection
// simple for loop
// fro of loop
// forEach

// const navItems = document.getElementsByClassName("nav-item");

// for(let i=0; i<navItems.length; i++){
//      console.log(navItems[i]);
// }

// const navItems = document.getElementsByTagName("a");
// console.log(navItems)
// for(let i=0; i<navItems.length; i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "black";
//     navItem.style.color = "red";
//     navItem.style.fontWeight = "bold";
// }

// for(let navItem of navItems){
//         navItem.style.backgroundColor = "black";
//         navItem.style.color = "red";
//         navItem.style.fontWeight = "bold"; 
// }

// in case of queryselector we can use all methods
// simple for loop
// fro of loop
// forEach
let navItems = document.querySelectorAll("a")
console.log(navItems)

navItems.forEach((navItem) => {
    navItem.style.backgroundColor = "black";
        navItem.style.color = "red";
         navItem.style.fontWeight = "bold"; 
});


