// for in loop array
// it gives index

const fruits = ["apple","orange","mango","banana"];
fruits2 = [];
for (let fruit in fruits){
fruits2.push(fruits[fruit]);
}
console.log(fruits2);