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
 const answer=userCart.some((user)=>user.price>100000);
 console.log(answer);