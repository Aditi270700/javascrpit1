function singHappyBirthday(){
console.log("happy birthday to you");
}
singHappyBirthday();
singHappyBirthday();
singHappyBirthday();
singHappyBirthday();
singHappyBirthday();

// function sumTwoNumber(number1,number2){
//   return number1 + number2;
// }

// const returnedValue = sumTwoNumber(8,5);
// console.log(returnedValue);

function sumThreeNumber (number1,number2,number3){
    return number1 + number2 + number3;
}
const returnedValue = sumThreeNumber(4,5,8);
console.log(returnedValue);

// function return anything

// isEven
// input : 1 number
// output : true , false

// 1st to check 
// function isEven(number){
//     if(number%2 === 0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(isEven(5));

// 2nd to check even number
// function isEven(number){
//     if (number % 2 ===0){
//         return true
//     }
//     return false
// }
// console.log(isEven(2));

// 3rd to check even number

function isEven(number){
    return number % 2===0;
}
console.log(isEven(9));


// function
// input : string
// output : firstCharacter


function firstChar(anyString){
    return anyString[1];
}
console.log(firstChar("aditi"));

// function
// input : array, target(number)
// output : index of target if target present in array

function findTarget(array,target){
    for(let i = 0; i<array.length; i++){
    if(array[i] === target){
        return i;
    }
}
    return -1;
    
}
const myArray = [12,32,52,45,21,32];
const ans = findTarget(myArray, 1);
console.log(ans);


function secondTarget(array2,num){
 for(let j=0; j<array2.length; j++){
    if(array2[j]===num){
        return j;
    }
 }
 return "no";
}

const myArray1 = [87,65,41,23,1,2,5]
const array3 = secondTarget(myArray1,65);
console.log(array3);