// function returning function

function myFunc(){
    function hello(){
        return "hello aditi";
    }
    return hello;
}
const ans = myFunc();
console.log(ans());