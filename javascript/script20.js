// event object

// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click",function(){
//     console.log(this);
// });

// whenever I add eventListener at any element
// js engine --- Line by line execute
// browser ---- js engine + extra features
// browser ---- js engine + webApi

// when browser got user perform the event 

const allButtons   = document.querySelectorAll(".my-button button");

for (let button of allButtons){
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget);
    })
    
}