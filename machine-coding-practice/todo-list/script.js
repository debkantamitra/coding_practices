const handleAddTodo = (e) => {
    e.preventDefault();
    const value = todoInput.value;

    if(editMode) {
        editableTodo.firstChild.innerText = value;
        editMode = false;
        editableTodo = null;
    } else if(value) {
        handleRenderTodo(value);
    } else {
        alert("Please enter a valid todo")
    }

    todoInput.value = ""
    todoInput.blur();
}

const handleRenderTodo = (todo) => {
    const li = document.createElement("li")
    const editBtn = document.createElement("button")
    const deleteBtn = document.createElement("button")

    li.innerHTML = `<span>${todo}</span>`
    editBtn.innerText = "Edit"
    deleteBtn.innerText = "Delete"

    li.append(editBtn, deleteBtn)
    todoList.appendChild(li)
}

const handleTodoClick = (e) => {
    const target = e.target

    if(target.nodeName == "BUTTON") {
        const todoItem = target.parentNode;

        if(target.innerText == "Delete") {
            todoItem.remove();
        } else if (target.innerText == "Edit") {
            editMode = true;
            editableTodo = todoItem;

            todoInput.value = todoItem.firstChild.innerText;
            todoInput.focus();
        }
    }
}

const todoForm = document.querySelector("#todo_form")
const todoInput = document.querySelector("#todo_input")
const todoList = document.querySelector("#todo_list")

let editMode = false;
let editableTodo = null;

todoForm.addEventListener("submit", handleAddTodo)
todoList.addEventListener("click", handleTodoClick)