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

}
const tommy = new Dog("tommy",3);
console.log(tommy.eat());


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

}
const user2 = new world1('shraddha','Multai');
console.log(user2.about());