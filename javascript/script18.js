// this keyword

const btn = document.querySelector(".btn-headline");

// in arrow function this value is window
btn.addEventListener("click",()=>{
    console.log("you clicked me !!!");
    console.log("value of this");
    console.log(this);
});
