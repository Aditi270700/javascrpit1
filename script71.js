// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.age} old years`
//         },
//         is18: function(){
//             return this.age>=18;
//     },
//     song:function(){
//         return "tere naam"
//     }
// }

function createUsers (firstName,lastName,age,email,address){
    const user = Object.create(createUsers.prototype);
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    return user;
}
createUsers.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
};
createUsers.prototype.is18 = function(){
    return this.age >= 18;
};
createUsers.prototype.sing = function(){
    return "lalalalala";
};
const user1 = createUsers('aditi','saudagar',25,'aditi@gmail.com','house number 2');
const user2 = createUsers('riya','shewane',17,'riya@gmail.com','house number 3');
const user3 = createUsers('dipika','kalbande',20,'dipika@gmail.com','house number 4');
console.log(user1.about());
console.log(user2.about());
console.log(user3.about());
console.log(user1.sing());
console.log(user1);