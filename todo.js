
updateList();
addEvents();

function getTodoListItems() {
    return JSON.parse(localStorage.getItem('todo-items') || '[]')
}

function setTodoListItems(list = []) {
    return localStorage.setItem('todo-items', JSON.stringify(list))
}

function add() {
    let input = document.getElementById("task_input");

    let userData = input.value;
    if (userData.trim() != 0) {
        const listArr = getTodoListItems();
        listArr.push(userData);
        setTodoListItems(listArr);
    }
    updateList();
}

function updateList() {
    const input = document.getElementById("task_input");
    const ul = document.getElementById("tasks");
    const listArr = getTodoListItems();

    const newLiTag = listArr.map((element, index) => {
        return ` <li>${element}<span onclick = "removeItem(${index})"><i class="fas fa-trash-alt delete-item"></i></span></li>`
    }).join('');

    ul.innerHTML = newLiTag;
    input.value = "";
}

function removeItem(index) {
    const listArr = getTodoListItems();
    listArr.splice(index, 1);
    setTodoListItems(listArr);
    updateList();
}

function addEvents() {
    let buttn = document.getElementById("clear-btn");
    buttn.addEventListener("click", function () {
        setTodoListItems();
        updateList();
    })
}
