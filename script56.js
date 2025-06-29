//  splice method

// In between array some elements delete and insert 
// use splice method
// start  , delete  , insert

const myArray = ["item1","item2","item3"];
// delete means how many value delete
const deleteItem=myArray.splice(2,1); //first which index, second how many delete
console.log(myArray);
console.log("delete item",deleteItem);


// insert
const myArray1 = ["item1","item2","item3","item4"];
myArray1.splice(2,0,'aditi');
console.log(myArray1);


// how to insert and delete together
const myArray2 = ["item1","item2","item3","item4"];
const deleteValue=myArray2.splice(1,2,"aditi","riya");
console.log(myArray2);
console.log("delete value",deleteValue);


const array1 = ["list1","list2","list3"]
const del=array1.splice(2,1)
console.log(array1)
console.log("delete",del);


const array2 = ["l1","l2","l3","l4","l5"]
array2.splice(3,0,"Barun");
console.log(array2);

const array3 = ["l1","l2","l3","l4","l5"]
array3.splice(4,2,"aditi","rani");
console.log(array3);


