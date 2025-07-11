// reduce method

// Aim : sum of all the numbers in array
const numbers = [1,2,3,4,5,6]

const sum=numbers.reduce((number1,number2)=>{
    return number1+number2;
})
console.log(sum);
// number1 is previous value
// number2 is current value
// number1     number2     return
//  1            2           3
//  3            3           6
//  6            4           10
//  10           5           15
//  15           6           21

const userCart = [
    {productId: 1,productName: "mobile", price:10000},
    {productId: 2,productName: "laptop", price:20000},
    {productId: 3,productName: "tv", price:30000},
]

const totalAmount = userCart.reduce((totalPrice,currentProduct)=>{
    return totalPrice + currentProduct.price;
},0)
console.log(totalAmount);

// totalprice     currentValue    return
//   0              {}             10000
//   10000          20000          30000
//   30000          30000          60000


const num = [1,2,45,8,9,100]

const ans = num.reduce((num1,num2)=>{
    return num1+num2;
})
console.log(ans);

const person = [
    {secondName:"aditi",gender:"female",rate:500},
    {secondName:"pragti",gender:"female",rate:600},
    {secondName:"radhika",gender:"female",rate:1000},
]

const sumAmount = person.reduce((total,currentRate)=>{
return total+currentRate.rate;
},0)
console.log(sumAmount);