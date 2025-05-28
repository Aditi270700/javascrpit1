// how to iterate object

const person = {
name: "aditi",
age:25,
"person hobbies":["guitar","sleeping","Listening music"]
}

// for loop in array
// objects.keys

for (let key in person){
// console.log(person[key]);
// console.log(`${key} : ${person[key]}`);
// console.log(key,":",person[key]);
 }

//   objects.keys
console.log(typeof (Object.keys(person)));
const val = Array.isArray((Object.keys(person)));
console.log(val);

for (let key of Object.keys(person)){
console.log(person[key])
}