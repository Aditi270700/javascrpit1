// small warnings

const user1 = {
    firstName:"Aditi",
    age:25,
    about:function(){
        console.log(this.firstName,this.age);
    }
}
console.log(user1);
// don't do this mistake

// user1.about();
const myFunc = user1.about.bind(user1);
myFunc();



const user2 = {
    secondName : "misty",
    gender:"female",
    value: function(){
        console.log(`my name is ${this.secondName} and gender is ${this.gender}`)
    }
}

const myFunc1 = user2.value.bind(user2);
myFunc1();