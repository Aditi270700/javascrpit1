console.log("script start !!!! ");
const allButtons = document.querySelectorAll(".my-buttons button")
 allButtons.forEach((button)=>{
button.addEventListener("click",(e)=>{
    let num=0;
    for(let i=0; i<=1000000; i++){
        num=num+i;
    }
    console.log(e.currentTarget.textContent,num);
})
 })

console.log("script end !!!!");