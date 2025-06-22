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


const human =  {
    name:"shraddha",
    age:14,
    music:["tere naam","saani","tu tu hai wahi","gadi leke"]
}
console.log(typeof(Object.keys(human)));
const myArray = Array.isArray(Object.keys(human));
console.log(myArray);

for(let keys of Object.keys(human)){
    console.log(human[keys]);
}