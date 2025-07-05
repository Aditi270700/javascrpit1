console.log("Hello world");

// event bubbling
// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// child.addEventListener("click",()=>{
//     console.log("you clicked on child");
// })
// parent.addEventListener("click",()=>{
//     console.log("you clicked on parent");
// })
// grandparent.addEventListener("click",()=>{
//     console.log("you clicked on grandparent");
// })
// document.body.addEventListener("click",()=>{
//     console.log("you clicked on document.body");
// })

// event capturing
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// event capturing

//  child.addEventListener("click",
//     ()=>{
//     console.log("capture !!! child");
//  },
//  true
// );
// parent.addEventListener("click",()=>{
//     console.log("capture !!!! parent");
//  },
// true);
grandparent.addEventListener("click",()=>{
    console.log("capture !!!! grandparent");
 },
true);
 document.body.addEventListener("click",()=>{
    console.log("capture !!!! document.body");
 },
true);


 child.addEventListener("click",()=>{
    console.log("bubble child");
})
parent.addEventListener("click",()=>{
   console.log("bubble parent");
})
// grandparent.addEventListener("click",()=>{
//    console.log("bubble grandparent");
// })
// document.body.addEventListener("click",()=>{
//    console.log("bubble document.body");
// })


