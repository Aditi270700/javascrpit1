function CreateUsers (firstName,lastName,age,email,address){
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.age=age;
    this.address=address;
}
CreateUsers.prototype.about = function(){
    return `${this.firstName} is ${this.age} ${this.email} years old`;
};
CreateUsers.prototype.is18 = function(){
    return this.age >= 18;
};
CreateUsers.prototype.sing = function(){
    return "lalalalala";
};
const user1 =new CreateUsers('aditi','saudagar',25,'aditi@gmail.com','house number 2');
const user2 =new CreateUsers('riya','shewane',17,'riya@gmail.com','house number 3');
const user3 =new CreateUsers('dipika','kalbande',20,'dipika@gmail.com','house number 4');
console.log(user1.about());
console.log(user2.about());
console.log(user3.about());
console.log(user1.sing());
console.log(user1);