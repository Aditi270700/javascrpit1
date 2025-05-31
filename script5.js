// string concatenation 
// means to add the number

// let string1 = "Aditi";
// let string2 = "Saudagar";

// let fullName = string1+" "+string2;
// console.log(fullName);

let string1 = "17";
let string2 = "18";

let newString= +string1 + +string2;
console.log(newString);


// template string
let age = 25;
let firstName = "Aditi";

// my name is Aditi and my age is 25
// let aboutMe = "my name is " + firstName + " and my age is " + age
let aboutMe = `my name is ${firstName} and my age is ${age}`;
console.log(aboutMe);

let string3 = +"15";
let string4 = +"15";

let fullName = string3 + string4;
console.log(fullName);


let aage = 22;
let secondName = "shraddha";

// let fromMe = "my name is " +secondName+ " and my age is "+ aage
// this is template string
let fromMe = `my name is ${secondName} and my age is ${aage}`;
console.log(fromMe);