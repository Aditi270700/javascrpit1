// Nested destructuring

const users = [
    {userId:1,firstName: 'aditi',gender:'female'},
    {userId:2,firstName: 'dipika',gender:'female'},
    {userId:3,firstName: 'radhika',gender:'female'},
]
// const [user1,user2,user3] = users;
// console.log(user1);
// console.log(user1.firstName);
// console.log(user3.gender);
// , , represent we reach third value
const [{firstName:user1firstName,userId}, , {gender:user3gender,firstName:user3firstName}] = users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);
console.log(user3firstName);


const obj1 = [
    {id1:101,name:"rahul",gender:"male"},
    {id2:102,name:"vivek",gender:"male"},
    {id3:103,name:"ritik",gender:"male"},
    ]

const [{name:userName,id1},{gender:mayBe,id2}] = obj1;
console.log(userName);
console.log(id1);
console.log(id2);
console.log(mayBe);



