// little practice with click event
const allButtons = document.querySelectorAll(".my-buttons button")

allButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        // console.log(e.currentTarget);
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "#333";
    })
})