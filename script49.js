// Filter method
// it is filtering the number and return array
const numbers = [1,3,2,6,8,7,9]

const EvenNumber = numbers.filter((number)=>{
    return number%2===0;
});
console.log(EvenNumber);


const num = [1,5,3,8,4,2,9]

const isOdd = num.filter((number)=>{
return number%2!==0;
})
console.log(isOdd);