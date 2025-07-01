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


function world(){
    console.log("hello !!!!");
}
world.prototype.name = "aditi";
world.prototype.lname = "saudagar";
world.prototype.about = function(){
    return `this is my name is ${this.name}`
}
console.log(world.prototype);
console.log(world.prototype.about());