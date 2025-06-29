// Maps 
// Map is an iterable

// object
// key is always in string
// key --> symbol
// key --> string

// const person = {
//     firstName : "harshit",
//     age:25,
//     1:"one"
// }
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person['1'])

// for (let key in person){
//     console.log(typeof key);
// }


// map store key value pair
const person = new Map();
person.set('firstName','Harshit');
person.set('age',25);
person.set(1,"one");
// person.set([1,2,3],"two");
// person.set({1:"one"},"aditi");
// console.log(person);
// console.log(person.get('firstName'));
// console.log(person.get(1));


// for (let key of person.keys()){
//     console.log(key, typeof key);
// }
// it gives array
for (let [key,value] of person){
        //  console.log(Array.isArray (key));
        console.log(key ,value);
     }
const person1 = new Map([['firstName','aditi'],['age',5]]);
console.log(person1);


const person2 = {
    id: 1,
    secondName:"riya"
}
const userInfo = new Map();
userInfo.set(person2,{age:8,gender:"male"});
// console.log(userInfo);
console.log(person2.id);
console.log(userInfo.get(person2).gender);
console.log(person2);


const person3 = new Map();

person3.set("secondName","aditi");
person3.set("age",25);
person3.set("gender","female");

for (let [key,value] of person3){
    console.log(key,value);
}
const per = new Map([["secondName","aditi"],["age",25]]);
console.log(per);
console.log(person3);


const person4 = {
    id:2,
    secondName:"Bipin"
}
const user = new Map();
user.set(person4,{email:"aditi@gmail.com",gender:"male"})
console.log(person4.secondName);
console.log(user.get(person4).email);