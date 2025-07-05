// what is prototype

// In javascript function is working like object

function hello(){
    console.log("hello world")
}
if(hello.prototype){
    console.log("prototype property");
}
else{
    console.log("not prototype");
}
// prototype is object {}
// only function provide property

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalala";
}
console.log(hello.prototype.sing());
console.log(hello.prototype);


function world(name,lname){
    console.log("hello !!!!");
    const wor = Object.create(world.prototype);
    wor.name=name
    wor.lname=lname
    
    
    return wor;
}

world.prototype.about = function(){
    return `this is my name is ${this.name}`
}
const wor1 = world("aditi","saudaga");
console.log(wor1.about());
// console.log(world.prototype);
// console.log(world.prototype.about());