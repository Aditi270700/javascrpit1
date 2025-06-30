// clone using object.assign

// memory

const obj = {
    key1: "value1",
    key2: "value2"
}
// if we spread operator it is not add in obj2
// const obj2={...obj};
// second way to cloning
const obj2 = Object.assign({},obj);
obj.key3 = "value3";
console.log(obj);
console.log(obj2);



const obj3 = {
    key3:"value2",
    key4:"value3"
}
const obj4 = Object.assign({},obj3);
obj3.key5 = "value4";
console.log(obj4);
console.log(obj3);