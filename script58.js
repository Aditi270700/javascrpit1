// sets (it is iterable)
// store data
// sets also have its have own methods
// No index-based access
// Order is not guarenteed
// unique items only (no duplicates allowed)


// const items = ['item1','item2'];
const number = new Set(); //it is the way to make set
console.log(number);
// this is diffrent of javascript perspective it is return array
number.add(["item1","item2"]);
// number.add(["item1","item2"]);
number.add(1);
number.add(2);
number.add(3);
number.add(4);
number.add(5);
number.add(6);


// if(number.has(1)){
//     console.log("1 is present");
// }else{
//     console.log("1 is not present");
// }

// we can also use for of loop
// for (let num of number){
//     console.log(num);
// }

const myArray = [1,2,4,4,5,6,5,6];
const uniqueElement = new Set(myArray);
// now we have to find this length
let length=0;
for(let element of uniqueElement){
    length++;
}
console.log(length);
console.log(uniqueElement);
console.log(myArray);


const myArray1 = [2,2,7,7,8,8,9,5,6,4]
const uni = new Set(myArray1);
length = 0
for(let elements of myArray1){
    length++;
}
console.log(length);
console.log(uni);
console.log(myArray1);