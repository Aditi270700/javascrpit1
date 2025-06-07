// optional chaining
// ? gives undefined not gives error
const user = {
    firstName:"Aditi",
    // address:{houseNumber:1234}
}
console.log(user.firstName);
console.log(user?.address?.houseNumber);// it gives undefined