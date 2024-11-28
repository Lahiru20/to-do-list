let element_taskList = document.getElementById("taskList");
let element_taskInput = document.getElementById("taskInput");
let element_addTaskBtn = document.getElementById("addTaskBtn");


function addtoTodoList(){
    if(!(element_taskInput.value === "")){
        element_taskList.innerHTML += `<li>${element_taskInput.value}</li>`;
    }
}

element_addTaskBtn.addEventListener("click",addtoTodoList)

