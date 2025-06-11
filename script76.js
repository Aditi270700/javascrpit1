// class keyword

class CreateUsers{
constructor(firstName,lastName,age,email,address){
    console.log("constructor called");
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.age=age;
    this.address=address;

}
    about (){
        return `${this.firstName} is ${this.age} ${this.email} years old`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "lalalalala";
    }
  func(){
    return "hii aditi";
  }
}

const user1 =new CreateUsers('aditi','saudagar',25,'aditi@gmail.com','house number 2');
const user2 =new CreateUsers('riya','shewane',17,'riya@gmail.com','house number 3');
const user3 =new CreateUsers('dipika','kalbande',20,'dipika@gmail.com','house number 4');

console.log(user1.about());
console.log(user1.func());
console.log(Object.getPrototypeOf(user1));