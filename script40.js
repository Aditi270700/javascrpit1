// lexical scope
// it fetch value globally
const myVar = "value11";
function myApp(){
    
   function myFunc(){
    // const myVar = "value58";
    const myFunc2 = ()=>{
    console.log("inside myfunc",myVar);
    }
    myFunc2();
   }
//    const myFunc1= function(){}
//    const myFunc2 = ()=>{}
   console.log(myVar);
   myFunc();
}
myApp();