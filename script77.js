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