// create function to create multiple objects



// const user1 = {
//     firstName :"Aditi",
//     lastName : "Saudagar",
//     email:"aditi@gmailcom",
//     age:5,
//     address:"house number 2",
//     about: function(){
//     return `${this.firstName} is ${this.age} old years`
//     },
//     is18: function(){
//         return this.age>=18;
//     }
// }

// for makin many data thats why we create function

// function (that function create object)
// 2.) add key value pair
// 3.) it returns object

function createUsers (firstName,lastName,age,email,address){
    const user = {};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about= function(){
        return `${this.firstName} is ${this.age} old years`
        };
    user.is18= function(){
            return this.age>=18;
    }
    return user;
}
const user=createUsers('aditi','saudagar',25,'aditi@gmail.com','house number 2');
console.log(user);
const is18 = user.is18();
console.log(is18);
const about = user.about();
console.log(about);


// function createUsers(firstName,lastName,aage){
//     const user1 = {}
//     user1.firstName=firstName,
//     user1.lastName=lastName,
//     user1.aage=aage,
//     user1.about1 =function(){
//    return (`my name is ${this.firstName} and age is ${this.aage}`)
//     }
//     user1.func = function(){
//         return this.aage>=18;
//     }
//     return user1
// }
// const user1 = createUsers(firstName="aditi",lastName="singh",aage=17);
// console.log(user1)
// const about1 = user1.about1();
// console.log(about1);
// const func = user1.func();
// console.log(func);
