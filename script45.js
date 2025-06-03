// callback function
// we take any function and use as an input that is known as callback function.
function myFunc(back){
    console.log("hello world")
   
  back("aditi");
}

function myFunc2(name){
    console.log("inside my func 2");
    console.log(`your name is ${name}`);
}
myFunc(myFunc2);