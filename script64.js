// call,apply bind method


function about(song,favoriteSinger){
    console.log(this.firstName, this.age,song,favoriteSinger);
      }
const user1 = {
    firstName: "aditi",
    age:8,
//     about: function(){
//   console.log(this.firstName, this.age)
//     }
}

const user2 = {
    firstName: "mohit",
    age:4, 
}

about.call(user2,"tere naam","kumar sanu");
about.call(user1,"dil","alka yagnik");
// use apply method
about.apply(user1,["guitar","bach"]);

// use bind method
// bind return function

const func = about.bind(user2,"tere liye","sunidhi chauhan");
func();



// call apply and bind method


function myAditi(hobby,dance){
 console.log(` my name is ${this.secondName} and gender is ${this.gender} or ${hobby} and ${dance}`)
}

const value = {
    secondName:"radhika",
    gender:"female",
}
const value1 = {
    secondName:"ritik",
    gender:"male",
}

myAditi.call(value,"siging","mere dholna");
myAditi.apply(value1,["painting","kissik"]);
const func1 = myAditi.bind(value,"drawing","hiriye");
func1();