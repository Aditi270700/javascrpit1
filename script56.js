//  splice method

// In between array some elements delete and insert 
// use splice method
// start  , delete  , insert

const myArray = ["item1","item2","item3"];
// delete means how many value delete
const deleteItem=myArray.splice(1,1);
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

