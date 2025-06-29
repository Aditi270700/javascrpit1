// every method
// returns boolean
// callback function ---> true / false (boolean)
// every method ---> true / false (boolean)
// but every function is even then it is return true
const numbers = [2,4,8,10,12,16];

const ans = numbers.every((isEven)=>isEven%2===0);
console.log(ans);


const userCart = [
    {productId: 1,productName: "mobile", price:10000},
    {productId: 2,productName: "laptop", price:20000},
    {productId: 3,productName: "tv", price:12000},
]

const answer=userCart.every((cartItem)=>cartItem.price >30000);
console.log(answer);

// All odd then it is return true if single even number in array then it returns false
const number1 = [89,87,85,87,81,41];
const odd = number1.every((isOdd)=>{
    return isOdd%2!==0
})
console.log(odd);
