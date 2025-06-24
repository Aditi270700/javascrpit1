// function returning function

function myFunc(){
    function hello(){
        return "hello aditi";
    }
    return hello;
}
const ans= myFunc();
console.log(ans());


function myfunc1(){
    function hello(){
        return "Aditi";
    }
    return hello;
}
const ans1 = myfunc1();
console.log(ans1());