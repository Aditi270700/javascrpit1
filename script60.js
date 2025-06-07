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