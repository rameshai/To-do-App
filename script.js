function addTask() {
    let taskInput = document.getElementById("task");
    let taskValue = taskInput.value.trim();
    if (taskValue === "") return;
    
    let now = new Date();
    let timestamp = now.toLocaleString();
    
    let li = document.createElement("li");
    li.innerHTML = `<span>${taskValue}</span> <span class='timestamp'>${timestamp}</span> <button onclick="removeTask(this)">Delete</button>`;
    li.addEventListener("click", function () {
        this.classList.toggle("completed");
    });
    
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}