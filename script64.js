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