// getters and setters
// we use function as property this is called getters and setters
class person {
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    setName(firstName,lastName){
      this.firstName=firstName;
      this.lastName=lastName;  
    }
    set fullName(fullName){
    const [firstName,lastName] = fullName.split(" ");
    this.firstName=firstName;
    this.lastName=lastName;  
    }
}

const person1 = new person("harshit","sharma",5);
console.log(person1);
// console.log(person1.fullName());
// we use function as property
// console.log(person1.fullName);
console.log(person1.firstName);
console.log(person1.lastName);
// person1.setName("aditi","saudagar"); both line is equal
person1.firstName="ravina";
person1.lastName="tondon";
console.log(person1.firstName);
console.log(person1.lastName);
person1.fullName = "Aditi Saudagar";
console.log(person1);
console.log(person1.fullName);


class newConstructor{
    constructor(name,lname,email){
  this.name=name
  this.lname=lname
  this.email=email
}
get totalName(){
    return `${this.lname} ${this.email}`
}
setName(lname,email){
this.lname=lname
this.email=email
}
set totalName(total){
    const[lname,email] = total.split(" ");
    this.lname=lname
    this.email=email
}

}

const user1 = new newConstructor('sakshi','khanna','sakshi@gmail.com')
console.log(user1.lname);
console.log(user1.totalName);