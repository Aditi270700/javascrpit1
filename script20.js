// primitive vs reference data types
// primitive type
// it is not change its value after increment or any changes
let num1 = 6;
let num2 = num1;
console.log("value of num1 is",num1);
console.log("value is num2 is",num2);
num1++;
console.log("after incrementing num1")
console.log("value is num1 is",num1);
console.log("value is num1 is",num2);

// reference types
// array
// it is  change its value after increment or any changes
let array1 = ["item1","item2"];
let array2 = array1;
console.log("value of array1 is",array1);
console.log("value of array2 is",array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("value of array1 is",array1);
console.log("value of array2 is",array2);

