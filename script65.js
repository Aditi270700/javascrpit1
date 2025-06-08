// small warnings

const user1 = {
    firstName:"Aditi",
    age:25,
    about:function(){
        console.log(this.firstName,this.age);
    }
}
// don't do this mistake

// user1.about();
const myFunc = user1.about.bind(user1);
myFunc();