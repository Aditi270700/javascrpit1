// how to clone array

// how to concatenate two arrays

// let array1 = ["item1","item2"];
// let array2 = array1;
// console.log(array1==array2);
// output is true

let array1 = ["item1","item2"];
// we are not use this type of clone
// let array2 = ["item1","item2"];
// we use this method to clone 
// let array2 = array1.slice(0).concat(["item3","item4"]);
//  let array2 = [].concat(array1,["item3","item4"]);
// new way
// spread operator
let oneMoreArray = ["item3","item4"];
let array2 = [...array1, ...oneMoreArray];
// let array2 = [...array1,"item3","item4"];
array1.push("item3");
console.log(array1==array2);
console.log(array1);
console.log(array2);

// second time practice
let array3 = ["value1","value2"];
let onceArray = ["value3","value4","value5"];
let array4 = [...array3, ...onceArray];
array3.push("value7");
console.log(array3);
console.log(array4);
