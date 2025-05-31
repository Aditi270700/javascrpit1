// functions inside function

const app = ()=>{
    const myFunc = ()=>{
        console.log("hello from myfunc");
    }
    const addTwo = (num1,num2)=>{
        return num1 + num2;
    }
    const mul = (num1,num2)=>{
        return num1*num2;
    }
    console.log("inside app");
    myFunc();
    console.log(addTwo(5,2));
    console.log(mul(2,8));
}
app();