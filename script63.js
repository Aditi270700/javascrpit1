// This keyword
// this and window both are same

function myFunc(){
    "use strict" //gives undefined
    console.log(this);  
}
myFunc();

function myAditi (){
    console.log(this);
}
myAditi();
