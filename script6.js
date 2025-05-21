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
console.log(myVariable);
myVariable = "Aditi";
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