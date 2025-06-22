// Function Expression


const singHappyBirthday = function(){
    console.log("happy birthday to you");
}
singHappyBirthday();

const sumTwoNumber = function(number1,number2){
    return number1 + number2;
}
const returnedValue = sumTwoNumber(4,5);
console.log(returnedValue);

const firstTarget = function(array,target){
    for(let i = 0; i<array.length; i++){
        if(array[i] === target){
            return i
        }
    }
    return -1
}
const myArray = [1,2,3,4,5,6];
const ans = firstTarget(myArray,5);
console.log(ans);

const multiply = function(num1,num2){
 return num1*num2
}
const value = multiply(5,6)
console.log(value);