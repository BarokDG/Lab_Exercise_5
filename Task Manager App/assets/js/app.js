// UI Variables

const taskInput = document.querySelector("#task");
const form = document.querySelector("#task-form");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const reloadIcon = document.querySelector(".fa");
const Ascending = document.querySelector('#asc');
const Descending = document.querySelector('#desc');

// Events

form.addEventListener("submit", addNewTask);
clearBtn.addEventListener("click", clearAllTasks);
filter.addEventListener("keyup", filterTasks);
taskList.addEventListener('click', removeTask);
reloadIcon.addEventListener('click', reloadPage);
Ascending.addEventListener('click', sortAsc);
Descending.addEventListener('click', sortDesc);
// Event Handlers

function addNewTask(e) {
    e.preventDefault();

    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";
        taskInput.style.boxShadow = "none";
        return;
    }

    taskInput.style.borderColor = "initial";
    taskInput.style.boxShadow = "initial";

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

    // Add date

    const divDate = document.createElement("div");
    divDate.className = "div-date";
    divDate.style.display = "block";

    let today = new Date();

    const dateText = document.createTextNode(
        today.getFullYear() +
        "-" +
        today.getMonth() +
        "-" +
        today.getDate() +
        " " +
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds() +
        ":" +
        today.getMilliseconds()
    );

    divDate.appendChild(dateText);

    li.appendChild(divDate);

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
        if (item.textContent.indexOf(filterSearch)) {
            item.style.display = "none";
        } else {
            item.style.display = "block";
        }
    })
}

function descSort(arr) {
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (arr[j - 1].innerText < arr[j].innerText) {
                var temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function sortDesc() {
    const divDate = document.querySelectorAll(".div-date");
    const taskDates = Array.from(divDate);
    const dates = descSort(taskDates);
    taskList.innerHTML = "";
    dates.forEach((date) => {
        taskList.appendChild(date.parentElement);
    });
}



function sortAsc() {
    const divDate = document.querySelectorAll(".div-date");
    const taskDates = Array.from(divDate);
    const dates = ascSort(taskDates);
    taskList.innerHTML = ""
    dates.forEach((date) => {
        taskList.appendChild(date.parentElement);
    });
}

function ascSort(arr) {
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (arr[j - 1].innerText > arr[j].innerText) {
                var temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}