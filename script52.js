// find method

const myArray = ["Hello","catt","dog","Lion"];

function isLength3(string){
    return string.length ===3;
}
const ans=myArray.find((string)=>{
   return string.length ===3;
});
console.log(ans);

// const ans = isLength3("dog");
// console.log(ans);

const users = [
    {userId : 1, userName : "aditi"},
    {userId : 2, userName : "priya"},
    {userId : 3, userName : "puname"},
    {userId : 4, userName : "ritik"},
    {userId : 5, userName : "megha"},
]
const answer=users.find((user)=>{
    return user.userId ===4;
})
console.log(answer);