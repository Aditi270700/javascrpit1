// parameter destructuring

// object
// react

const person = {
    firstName: "harshit",
    gender: "male",
    age:25,
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age);
// }
// printDetails(person);

function printDetails({firstName,gender,age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printDetails(person);


const person1 = {
    secondName :"Aditi",
    age:50,
    email:"aditi@gmail.com"
}

function detail({secondName,age,email}){
console.log(secondName);
console.log(age);
console.log(email);
}
detail(person1);