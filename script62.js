// methods
// create your owm method
// function inside object is clled method

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