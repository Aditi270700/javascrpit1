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

let num3 = 54;
let num4 = num3;
console.log("the first num is",num3);
console.log("the second num is",num4);
num3++;
console.log("after increment is",num3);
console.log("after increment is",num4);


// array is reference datatype

let array3 = ["value1","value2"]
let array4 = array3;
console.log("the first array is",array3);
console.log("the second array is",array4);
array3.push("value3");
console.log("the after increment array is",array3);
console.log("the  after increment array is",array4);


