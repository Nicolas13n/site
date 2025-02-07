document.getElementById("addTaskButton").addEventListener("click",addTarefas);

function addTarefas(){
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();
    const msg = document.querySelector(".msg");
    if(taskValue === ''){
        msg.textContent = "error";
        setInterval(() => {
            msg.textContent = "";
            
        }, 3000);
        return;
    }
    const tastList = document.getElementById("taskList");
    const li = document.createElement('li');


    const completou = document.createElement("button");
    completou.textContent = "completou";
    completou.addEventListener("click", () => {
        li.classList.toggle("completed");
        completou.classList.toggle("esconder")
        remove.classList.toggle("esconder")
    });

    const remove = document.createElement("button");   
    remove.textContent = "remove";
    remove.addEventListener("click", () => {
        tastList.removeChild(li)
    })
    li.textContent = taskValue;
    li.appendChild(completou)
    li.appendChild(remove);
    tastList.appendChild(li)

    taskInput.value = ""
}