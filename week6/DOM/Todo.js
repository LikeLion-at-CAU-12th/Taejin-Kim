import Button from "./Button.js";
import Div from "./Div.js";
import ButtonIMG from "./ButtonIMG.js";

var IMGback = new Image()
IMGback.src = './back.png';

var IMGcheck = new Image();
IMGcheck.src = './check.png';

var IMGdelete = new Image();
IMGdelete.src = './delete.png';


class Todo{
    constructor(todo){
        this.row = new Div('', 'row').node; // div태그 생성하는 과정
        this.textBox = new Div(todo, 'text-box');
        this.completeBtn = new ButtonIMG(IMGcheck.src, 'complete-btn');
        this.delBtn = new ButtonIMG(IMGdelete.src, 'del-btn');
    }
    addRow(){
        [this.textBox, this.completeBtn, this.delBtn].forEach((dom) => {
            //forEach   각각에 대해 함수를 적용하겠다는 매서드.
            this.row.appendChild(dom.node); // row밑에 각각의 textBox, completetbtn, delBtn 넣는다는 것
        })
        return this.row;
    }
    getRow(){
        return this.row;
    }
    getCompleteBtn(){
        return this.completeBtn.node;
    }
    getDelBtn(){
        return this.delBtn.node;
    }
    getInnerText(){
        return this.textBox.node;
    }
}

export default Todo;