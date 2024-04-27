import TodoController from "./controller/TodoController.js";

const addBtn = document.getElementById('input');
const input = document.querySelector('input'); // 태그 값으로 바로 가져오는 방법

addBtn.addEventListener('click', () => {
    const todoController = new TodoController(input.value);
    todoController.addTodo();
})
//"function(){}" === "() => {}"
