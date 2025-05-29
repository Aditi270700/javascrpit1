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