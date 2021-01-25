// UI Variables

const taskInput = document.querySelector("#task");
const form = document.querySelector("#task-form");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const reloadIcon = document.querySelector(".fa");

// Events

form.addEventListener("submit", addNewTask);
clearBtn.addEventListener("click", clearAllTasks);
filter.addEventListener("keypress", filterTasks);
taskList.addEventListener('click', removeTask);
reloadIcon.addEventListener('click', reloadPage);
// Event Handlers

function addNewTask(e) {
    e.preventDefault();

    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";
        return;
    }

    taskInput.style.borderColor = "initial";

    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to ul 
    taskList.appendChild(li);

    taskInput.value = '';;
}

function clearAllTasks(e) {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }
}

function reloadPage() {
    location.reload();
}

function filterTasks(e) {

    let filterSearch = filter.value;
    let listItems = document.querySelectorAll(".collection-item");
    
    listItems.forEach((item) => {
        if (item.textContent.indexOf(filterSearch)){
            item.style.display = "none";
        }
        else{
            item.style.display = "block";
        }
    })
}
