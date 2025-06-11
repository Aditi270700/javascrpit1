// same method in base class

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

eat(){
    return `Modified Eat: ${this.name} is eating `
   }

run(){
    return `${this.name} is running at ${this.speed}kmph`
}

}
// const tommy = new Dog("tommy",3,45);
// console.log(tommy.eat());
// console.log(tommy.run());

// it returns in base class

// object / instance

const animal2 = new Animal('sheru',56)
console.log(animal2.eat());