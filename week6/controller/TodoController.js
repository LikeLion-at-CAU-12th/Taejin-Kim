//todo관련 모든걸 제어할 js

import Todo from "../DOM/Todo.js";

class TodoController {
    constructor(todo){
        this.newTodo = new Todo(todo);
        this.delBtnNode = this.newTodo.getDelBtn();
        this.comBtnNode = this.newTodo.getCompleteBtn();
        this.innerNode = this.newTodo.getInnerText();

        this.delBtnNode.addEventListener('click', ()=>{
            this.delTodo();
        });
        this.comBtnNode.addEventListener('click', ()=>{
            this.doneTodo();
        });
    }

    addTodo(){ // 매서드
        const todoList = document.getElementById("to-do-list");
        const input = document.querySelector('input');
        todoList.appendChild(this.newTodo.addRow());
        input.value = ''; //value값을 비워준다는 의미.
    }
    delTodo(){
        const todoList = document.getElementById("to-do-list");
        todoList.removeChild(this.newTodo.getRow());
    }
    doneTodo(){
        this.innerNode.classList.toggle('done-text');
        this.comBtnNode.classList.toggle('done-btn');
        if(this.comBtnNode.innerText === "미완"){
            this.comBtnNode.innerText = "완료";
            // this.innerNode.classList.remove('done-text');
            // this.comBtnNode.classList.remove('done-btn'); // 토글이 알아서 해주는 동작임.
        } else {
            this.comBtnNode.innerText = "미완";
            // this.innerNode.classList.add('done-text');
            // this.comBtnNode.classList.add('done-btn'); // 토글이 알아서 해주는 동작임.
        }
    }
}

export default TodoController;