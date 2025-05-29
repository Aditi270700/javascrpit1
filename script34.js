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

const [{firstName:user1firstName,userId}, , {gender:user3gender,firstName:user3firstName}] = users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);
console.log(user3firstName);

