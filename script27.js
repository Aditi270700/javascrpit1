// array destructuring

const myArray = ["value1","value2","value3","value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1",myvar1);
// console.log("value of myvar2",myvar2);

// let [myvar1,myvar2,myvar3] = myArray;
// console.log("value of myvar1",myvar1);
// console.log("value of myvar2",myvar2);
// console.log("value of myvar2",myvar3);

// let [myvar1, ,myvar2] = myArray;
// console.log("value of myvar1",myvar1);
// console.log("value of myvar2",myvar2);

// let [myvar1,myvar2] = myArray;
// let myNewArray = myArray.slice(2);
// console.log("value of myvar1",myvar1);
// console.log("value of myvar2",myvar2);
// console.log(myNewArray);

// second type to generate array
let [myvar1,myvar2,...myNewArray] = myArray;
console.log("value of myvar1",myvar1);
console.log("value of myvar2",myvar2);
console.log(myNewArray);


const fruit = ["apple","banana","orange","papaya","cherry"];
 let [fruit1,fruit2,...myNewFruit] = fruit;
 console.log("the fruit1 is",fruit1)
 console.log("the fruit2 is",fruit2)
 console.log(myNewFruit);