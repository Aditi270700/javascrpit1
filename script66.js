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
