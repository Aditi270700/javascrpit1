// undefined
// null

// if we make variable but we don't assign any value then 
// it is known as undefined value

let firstName;
console.log(typeof firstName);
firstName = "Aditi";
console.log(typeof firstName, firstName);


// Null
// null means nothing

let myVariable = null;
console.log(typeof myVariable,myVariable);
myVariable = "priya";
console.log(typeof myVariable, myVariable);
// In javascript is bug typeof null is object 
// but the reality is typeof null is null
console.log(typeof null);

// BigInt
// Bigint is used to n number of output 
let myNumber = BigInt(12379654127654123698741258963214766565684654545446545545455);
let sameMyNumber = BigInt(12);
let number = BigInt(125);
console.log(sameMyNumber);
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);
console.log(number + sameMyNumber);

// both number is must BigInt, if BigInt is not define it will show error
let theNumber = BigInt(987456446546546865465646465646546546546465465465468654351321313134465);
let firstNumber = BigInt(25);
let secondNumber = BigInt(50);
let sumNumber = (firstNumber+secondNumber);
console.log(sumNumber);
console.log(theNumber);