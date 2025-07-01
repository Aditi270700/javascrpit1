const obj1 = {
    key1:"value1",
    key2:"value2"
}
const obj2 = Object.create(obj1);
// there is one more way to create empty object
obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2.key2);
console.log(obj2);

// this is happening
console.log(obj2.__proto__);


const value = {
    key4: "value2",
    key5:"value3"
}

const value1 = Object.create(value)
value1.key6 = "value4"
console.log(value1.key4);
console.log(value1);
console.log(value1.key6);
console.log(value1.__proto__);

