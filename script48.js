// map method
// map is return array
const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
// }


const squareNumber = numbers.map(function(number){
    return number*number;
})
console.log(squareNumber);


// use map method use arrow function
// const squareNumber = numbers.map((number,index)=>{
// return  `index: ${index}, ${number*number}`;
// });
// console.log(squareNumber);

const users = [
    {firstName:"aditi", age:25},
    {firstName:"riya", age:18},
    {firstName:"dipika", age:20},
    {firstName:"mona", age:35},
]

let second=users.map((user)=>{
    return user.firstName;
})
console.log(second);


const num = [1,2,3,4,5];

const ans = num.map(function(number1){
    return number1*number1;
})
console.log(ans);


const person = [
    {secondName:"aditi",gender:"female"},
    {secondName:"pragti",gender:"female"}
]
const ans1 = person.map((human)=>{
 return human.secondName
})
console.log(ans1);




