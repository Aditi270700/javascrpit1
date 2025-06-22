// for in loop array
// it gives index

const fruits = ["apple","orange","mango","banana"];
fruits2 = [];
for (let fruit in fruits){
fruits2.push(fruits[fruit]);
}
console.log(fruits2);


const fruit3 =["orange","papaya","stawberry","cherry"];
const fruit4 = [];
for(let fruits in fruit3){
    fruit4.push(fruit3[fruits]);
}
console.log(fruit4);