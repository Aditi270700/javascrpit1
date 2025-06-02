// rest parameters

// function myfunc(a,b,...c){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is`,c)
    
// }
// myfunc(3,4,5,6,9,8,7);


function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total=total+number;
        // console.log(number);
    }
    
    return total;
    // console.log(numbers);
    // console.log(Array.isArray(numbers));
}
const ans=addAll(2,3,4,5,5,7);
console.log(ans);

