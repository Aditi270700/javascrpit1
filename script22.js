// for loop in array

let fruits = ["apple","mango","grapes","banana"];

// for(i=0; i<=9; i++){
// console.log(i);
// }


// console.log(fruits.length);
// console.log(fruits[2]);
// console.log(fruits[fruits.length-1]);

// for(i=0; i<=fruits.length-1; i++){
// console.log(fruits[i].toUpperCase());
// }

let fruits2 = [];
for(let i=0; i<fruits.length; i++){
fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);

let fruits3 = ["ADITI","RIYA","RUHANA","DIPIKA","RADHIKA","ROHIT"];

let fruits4 = [];
for(let j=0; j<fruits3.length; j++){
    fruits4.push(fruits3[j].toLowerCase());
}
console.log(fruits4);
