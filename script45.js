// callback function
// we take any function and use as an input that is known as callback function.
function myFunc(back){
    console.log("hello world")
  back("aditiSaudagar");
}

function myFunc2(name){
    console.log("inside my func 2");
    console.log(`your name is ${name}`);
}
myFunc(myFunc2);

function myfunc3(calling){
  console.log("hello aditi");

  calling("Sharma");
}

function myfunc4(name1){
 console.log("anushka");
 console.log(` anushka ${name1}`)
}

myfunc3(myfunc4)