// some method

// some method is find any single element present according to its condition that 
// its return true otherwise false

const numbers = [3,4,5,9,7];

const ans=numbers.some((number)=>number%2===0);
console.log(ans);

const userCart = [
    {productId: 1,productName: "mobile", price:10000},
    {productId: 2,productName: "laptop", price:20000},
    {productId: 3,productName: "tv", price:30000},
    {productId: 3,productName: "macbook", price:250000},
]
 const answer=userCart.some((user)=>user.productName = "mobile");
 console.log(answer);

 const number1 = [2,4,6,8,10];

 const num = number1.some((isOdd)=>isOdd%2!==0)
 console.log(num);