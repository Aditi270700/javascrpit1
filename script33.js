// objects inside array
// very useful in real world applications

const users = [
{userId:1,firstName: 'aditi',gender:'female'},
{userId:2,firstName: 'dipika',gender:'female'},
{userId:3,firstName: 'radhika',gender:'female'},
]
console.log(users);
for(let user of users){
    console.log(user);
}


const obj1 = [
{id:101,name:"rahul",gender:"male"},
{id:102,name:"vivek",gender:"male"},
{id:103,name:"ritik",gender:"male"},
]
console.log(obj1);
for(let data of obj1){
    console.log(data);
}