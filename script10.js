//  And Or operator
//  both condition is true, "AND" operator is used
//  if both and one condition is true, "OR" operator is used

let firstName = "Aditi";
let age = 2;

// if(firstName[0]==="A"){
// console.log("your name starts A");
// }

// if (age > 18){
// console.log("you are above 18");
// }

// if(firstName[0]==="A" && age>18){
// console.log("name starts A and above 18");
// }
// else{
// console.log("not starts A and not above age 18");
// }

// or operator
if (firstName[0] === "A" || age > 18) {
  console.log("inside if");
} else {
  console.log("inside else");
}

// And operator
let secondName = "shraddha";
let aage = 25;

if (secondName[2] === "r" && aage > 18){
  console.log("yes");
} else {
  console.log("noo");
}
