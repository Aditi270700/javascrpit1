// objects
// object is reference type

// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects
// const person = {name:"aditi",age:25};
const keys="email";
const person = {
name:"aditi",
age:25,
hobbies:["dancing","singing","listening music"]
}
// we are not write key value in string but it is by default in string
console.log(typeof person);
// how to add key value pair to objects
person.gender = "female";
person.favorite_singer = "kumar sanu";
console.log(person);
console.log(person["hobbies"]);
person[keys]="aditi@gmail.com";
console.log(person);


// how to access data from objects
// this is dot notation
console.log(person.name);
console.log(person.age);
console.log(person.favorite_singer);


// difference between dot and bracket notation
// this is bracket notation
console.log(person["name"]);
console.log(person["age"]);
console.log(person["gender"]);


// difference between dot and bracket notation
const key = "email";
const human = {
name:"radhika",
age:27,
"person hobbies":["guitar","sleeping","listening music"]
}
// we don't use dot notation if space in key value
console.log(human["person hobbies"]);
// if we add new key in object
human[key]="aditisaudagar17@gmail.com";
console.log(human);



