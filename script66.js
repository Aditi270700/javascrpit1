// arrow function

const user1 = {
    firstName:"Aditi",
    age:25,
    about(){
        console.log(this);
        console.log(this.firstName,this.age);
    }
}
user1.about();

const user2 = {
    secondName: "shraddha",
    age:22,
    func(){
console.log(this);
console.log(this.secondName)
    }
}
user2.func();
