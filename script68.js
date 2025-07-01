const userMethods = {
    about: function(){
        return `${this.firstName} is ${this.age} old years`
        },
        is18: function(){
            return this.age>=18;
    },
    song:function(){
        return "tere naam"
    }
}

function createUsers (firstName,lastName,age,email,address){
    const user = Object.create(userMethods);
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    return user;
}

const user1 = createUsers('aditi','saudagar',25,'aditi@gmail.com','house number 2');
const user2 = createUsers('riya','shewane',18,'riya@gmail.com','house number 3');
const user3 = createUsers('dipika','kalbande',20,'dipika@gmail.com','house number 4');
const user4 = createUsers('radhika','maraskole',27,'radhika@gmail.com','house number 5');
console.log(user1.about());
console.log(user2.about());
console.log(user3.about());
console.log(user4.about());
console.log(user2.song());
console.log(user1);

// const user = {
//     about1: function(){
//     return `this is my name ${this.secondName} and age ${this.aage}`
//     },
//     gender1: function(){
//         return this.gender==="female";
//     }
// }

// function createUsers(secondName,aage,gender){
//     const user1 = Object.create(user);
//     user1.secondName=secondName,
//     user1.aage=aage,
//     user1.gender=gender
//     return user1;
// }

// const user5 = createUsers(secondName="dipika",aage=29,gender="female");
// const user6 = createUsers(secondName="ritik",aage=22,gender="male");
// console.log(user5.about1());
// console.log(user5.gender1());
// console.log(user6.gender1());