// sort method

// when we sort in javascript it is sort like string

const numbers = [10,20,5,800,700,1200,200];
numbers.sort((a,b)=>{
return a-b;
})
console.log(numbers);
// if we get value in descending order so we can use (b-a)


const userNames = ["aditi","priti","ishika","ruchika","anamika","Ritik"];
userNames.sort()
console.log(userNames);
// it is sorted like dictionary but it sort capital letter first

// how sort method can work
// 1200,410
// a-b ----> 790
// a-b ----> positive (greater than 0)
// 410,1200


const userCart = [
    {productId: 1,productName: "mobile", price:20000},
    {productId: 2,productName: "laptop", price:10000},
    {productId: 3,productName: "tv", price:5000},
]
const products = userCart.slice(0).sort((a,b)=>{
    return a.price-b.price;
})
console.log(products);