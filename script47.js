//  important array methods

// forEach
// map
// filter
// reduce

// forEach Method

// pass the index

const numbers = [4,2,5,8];

function myFunc(number,index){
console.log(`index is ${index} number is ${number}`);
}
numbers.forEach(myFunc);

// second type
// const num = [5,6,7,8];

// num.forEach(function(num,a){
// console.log(`index is ${a} and number is ${num}`);
// });

numbers.forEach(function(number,index){
console.log(number*3,index);
})


const users = [
    {firstName:"aditi", age:25},
    {firstName:"riya", age:18},
    {firstName:"dipika", age:20},
    {firstName:"mona", age:35},
]
users.forEach(function(user){
    console.log(user.firstName,user.age);
})

// we can use "for of loop"
for(let use of users){
    console.log(use.firstName);
}


