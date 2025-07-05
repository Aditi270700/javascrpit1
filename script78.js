// super

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
   eat(){
    return `${this.name} is eating`
   }
   isSuperCute(){
    return this.age <=1;
   }
   isCute(){
    return true;
   }

}
const animal1 = new Animal("tom",2);
console.log(animal1);
console.log(animal1.eat());


// dog class

class Dog extends Animal{
constructor(name,age,speed){
super(name,age)
this.speed=speed;
}

run(){
    return `${this.name} is running at ${this.speed}kmph`
}
}
const tommy = new Dog("tommy",3,45);
console.log
console.log(tommy.eat());
console.log(tommy.run());


class world{
    constructor(name,city){
    this.name=name
    this.city=city
    }
    about(){
        return `my name is ${this.name} and city is ${this.city}`
    }
    isCity(){
return this.city="Bhopal";
    }
}
const user1 = new world('ritika','Indore');
console.log(user1.about());


class world1 extends world{
constructor(name,city,email){
super(name,city)
this.email=email;
}
isEmail(){
    return ` my email is ${this.email}`
}
}
const user2 = new world1('shraddha','Multai','sharadha@gmail.com');
console.log
console.log(user2.about());
console.log(user2.isEmail());