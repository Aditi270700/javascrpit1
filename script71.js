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


function world(name,lname,email){
 const wor = Object.create(world.prototype)
 wor.name = name
 wor.lname=lname
 wor.email=email
  return wor;
}

world.prototype.detail = function(){
 return `this is my full name ${this.name} ${this.lname}`
}
world.prototype.validEmail = function(){
    return this.email==='aditi@gmail.com';
}
const wor1 = world('aditi','saudagar','aditi@gmail.com');
const wor2= world('ritika','singh','ritika@gmail.com');
const wor3 = world('priti','sharma','priti@gmail.com');
console.log(wor1.detail());
console.log(wor2.detail());
console.log(wor1.validEmail());

