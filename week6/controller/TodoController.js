//todo관련 모든걸 제어할 js

import Todo from "../DOM/Todo.js";

class TodoController {
    constructor(todo){
        this.newTodo = new Todo(todo);
        this.delBtnNode = this.newTodo.getDelBtn();
        this.delBtnNode2 = this.newTodo.getDelBtn2();
        this.comBtnNode = this.newTodo.getCompleteBtn();
        this.backBtnNode = this.newTodo.getBackBtn();
        this.innerNode = this.newTodo.getInnerText();

        this.delBtnNode.addEventListener('click', ()=>{
            this.delTodo();
        });
        this.delBtnNode2.addEventListener('click', ()=>{
            this.delTodo2();
        });
        this.comBtnNode.addEventListener('click', ()=>{
            this.delTodo();
            this.addComplete();

        });
        this.backBtnNode.addEventListener('click', ()=>{
            this.delComplete();
            this.addTodo();

        });
    }

    addTodo(){ // 매서드
        const todoList = document.getElementById("to-do-list");
        const input = document.querySelector('input');
        todoList.appendChild(this.newTodo.addRow());
        input.value = ''; //value값을 비워준다는 의미.
    }

    addComplete(){ 
        const todoList = document.getElementById("complete-list");
        const input = document.querySelector('input');
        todoList.appendChild(this.newTodo.addRowComplete());
        input.value = ''; //value값을 비워준다는 의미.
    }


    delTodo(){
        const todoList = document.getElementById("to-do-list");
        todoList.removeChild(this.newTodo.getRow());
    }

    delTodo2(){
        const todoList = document.getElementById("complete-list");
        todoList.removeChild(this.newTodo.getRow2());
    }

    delComplete(){
        const todoList = document.getElementById("complete-list");
        todoList.removeChild(this.newTodo.getRow2());
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