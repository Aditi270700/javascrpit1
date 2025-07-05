// class keyword

class CreateUsers{
constructor(firstName,lastName,age,email,address){
    // console.log("constructor called");
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


class newConstructor{
    
constructor(name,lname,gender,address){
this.name=name;
this.lname=lname;
this.gender=gender;
this.address=address;
}
ifUser (){
    return `my name is ${this.name}${this.lname}`
    }
ifUser1 (){
    return this.gender="female";
}
}
const user4 = new newConstructor('rinky','singh','female','bhawana nagar');
const user5 = new newConstructor('pinky','soni','female','Mp nagar');
const user6 = new newConstructor('chinky','sharma','female','ashoka garden');

console.log(user4.ifUser());
console.log(user5.ifUser());
console.log(user5.ifUser1());
