// new keyword

function createUser(firstName,age){
    this.firstName = firstName;
    this.age = age;
}
createUser.prototype.about = function(){
    console.log(this.firstName,this.age);
}
createUser.prototype.sing = function(){
    console.log("hello");
}
const user1 = new createUser("Aditi",25);
const user2 = new createUser("muskan",30);
user1.about();
user2.sing();
user2.about();

for(let key in user1){
 if(user1.hasOwnProperty(key)){
console.log(key);
 }
}