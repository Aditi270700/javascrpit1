// what happens to function declaration

// javascript is a lexical scope language
// what is hoisting
// before code execution memory store code
console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);

function myFunction(){
    console.log("This is my function");
}
myFunction();

var firstName = "Aditi";
var lastName = "saudagar"
var fullName = firstName + " " + lastName;
console.log(fullName);