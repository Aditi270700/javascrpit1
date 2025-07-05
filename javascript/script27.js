const todoform = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newTodotext = (todoInput.value);
    const newLi = document.createElement("li");
    const newLiInnerHtml = ` 
    <span class="text">${newTodotext}</span>
    <div class="todo-buttons">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>
    </div>`
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value="";
});

todoList.addEventListener("click",(e)=>{
    // console.log(e.target);
    // check if user clicked on done button
    if(e.target.classList.contains("remove")){
        // console.log("you want to remove something ? ")
        const targetLi = e.target.parentNode.parentNode;
        targetLi.remove();
    }

    // if(e.target.classList.contains("done")){
    //     console.log("great !!!")
    // }
    if(e.target.classList.contains("done")){
        const lispan = e.target.parentNode.previousElementSibling;
        lispan.style.textDecoration = "line-through";
    }
});