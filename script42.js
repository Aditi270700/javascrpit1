// default parameter

// function addTwo(a,b){
//     if(typeof b === "undefined"){
//         b=0;
//     }
//     return a+b;
// }
// this is default parameter if we don't pass b value then it will return 0
function addTwo(a,b=0){
    return a+b;
}
const ans = addTwo(4,32);
console.log(ans);