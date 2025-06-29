// iterables
// we create for of loop on string, array are iterables
// string is iterable that why we put for of loop on string
const firstName = "Aditi";
for (let char of firstName){
    console.log(char);
}


// array is iterable 
const items = ["item1","item2","item3"];
for (let item of items){
    console.log(item);
}
// object is not iterable

// array like object
// they have length property and we check index 
// example string
// yes array is array like object

const secondName = "harshit";
console.log(secondName.length);
console.log(secondName[3]);



const string = "shraddha";
for(let name of string){
    console.log(name);
}

const myArray1 = ["value1","value2","value3"]
for(let value of myArray1){
    console.log(value);
}

const name = "bipin"
console.log(name.length);
console.log(name[2]);