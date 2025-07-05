// let numbers = new Array(1,2,3,4);
// console.log(numbers);
// console.log(Array.prototype);

function hello(){
    console.log("hello");
}


// prototype
console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push('2','3');
console.log(hello.prototype);

function world()
{
}
console.log(world.prototype);
world.prototype = [];
console.log(world.prototype);
world.prototype.push('4','5','6');
console.log(world.prototype);

