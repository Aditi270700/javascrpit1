// nested if else

// winning number 19

// 19 your guess is right
// 17 too low
// 20 too high

// prompt is used to popup and taken value in string
let winningNumber = 19;
let userGuess = +prompt("Guess a number");

if(userGuess === 19){
console.log("your guess is right")
}
else{
    if(userGuess<19)
console.log("too low !!!");
    else{
    console.log("too high !!!");
    }
}


// let schorlarNumber = 45;
// let wonNumber = +prompt("enter the number");

// if(wonNumber===45){
//     console.log("greater");
// }
// else{
//     if(wonNumber<45){
// console.log("lower");
//     }
//     else{
//         console.log("higher")
//     }
// }
