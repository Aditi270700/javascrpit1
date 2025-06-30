// methods
// create your owm method
// function inside object is called method

// const person = {
//     firstName: "aditi",
//     age:25,
//     about: function(){
//         console.log(`person name is ${this.firstName} and age is ${this.age}`)
//     }
// }
// person.about()
// this means object

function personInfo(){
             console.log(`person name is ${this.firstName} and age is ${this.age}`)
        }

const person1 = {
    firstName:"aditi",
    age:8,
    about: personInfo
}

const person2 = {
    firstName:"priti",
    age:18,
    about: personInfo
}

const person3 = {
    firstName:"rinky",
    age:28,
    about: personInfo
}

person1.about();
person2.about();
person3.about();


function userPerson(){
    console.log(`my name is ${this.secondName} and age is ${this.age}`);
}

const value1 = {
    secondName:"misti",
    age:22,
    ans : userPerson
}

 const value2 = {
    secondName:"pinki",
    age:23,
    ans : userPerson
}

const value3 = {
    secondName:"dipti",
    age:24,
    ans : userPerson
}
value1.ans();
value2.ans();
value3.ans();
