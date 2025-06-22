// spread operator
// spread operator it is spreading the elements

const array1 = [1,2,3];
const array2 = [5,6,7];

// const newArray = [...array1, ...array2,89,52];
// const newArray = [..."abc"];
const newArray = [..."123456789"];
console.log(newArray);


// spread operator in objects
// key is unique that's it returns only one key value
const obj1 = {
key1: "value1",
key2: "value2",
// key1: "value59"
};
const obj2 = {
key1:"valueunique",
key3: "value3",
key4: "value4",
};
// const newObject = {...obj1, ...obj2};

// if we change the order first key is override obj2
// const newObject = {...obj1, ...obj2, key69:"value69",key5:"value50"};
const newObject = {...obj2, ...obj1, key69:"value69",key5:"value50"};
console.log(newObject);
console.log(obj1);

// it returns index and  value
const realObject = {..."abc"};
console.log(realObject);

const allItem = {...["item1","item2"]};
console.log(allItem);

