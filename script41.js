// block scope vs function scope

// let and const are block scope
// var is function scope

// Let and const is used only for their block
// console.log(firstName);
// {
// let firstName = "aditi";

// }

// var function

function myApp(){
    if(true){
        var firstName="aditi";
        console.log(firstName);
    }
    console.log(firstName);
}
myApp();