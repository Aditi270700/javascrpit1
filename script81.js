// static methods and properties

class person {
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }
    static classInfo(){
        return 'this is a class'
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
    const [firstName,lastName] = fullName.split(" ");
    this.firstName=firstName;
    this.lastName=lastName;  
    }
    eat(){
        return `${this.firstName} is eating`
       }
       isSuperCute(){
        return this.age <=1;
       }
       isCute(){
        return true;
       }

}
const person1 = new person("aditi","saudagar",5);
console.log(person1.eat());
const info = person.classInfo();
console.log(info);


class newConstructor{
    constructor(name,lname,email){
  this.name=name
  this.lname=lname
  this.email=email
}

static person(){
    return 'my name is ritika singh'
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

person1(){
    return `this is my fullname ${this.name} ${this.lname}`
}

}

const user1 = new newConstructor('sakshi','khanna','sakshi@gmail.com')
console.log(user1.lname);
console.log(user1.totalName);
console.log(user1.person1());
const info1 = newConstructor.person();
console.log(info1);