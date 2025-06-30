// optional chaining
// ? gives undefined not gives error
const user = {
    firstName:"Aditi",
    // address:{houseNumber:1234}
}
console.log(user.firstName);
console.log(user?.address?.houseNumber);// it gives undefined

const user1 = {
    secondName :"dhristi",
}
console.log(user1.secondName);
console.log(user1?.age);