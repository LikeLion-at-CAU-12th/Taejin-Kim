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
        this.row2 = new Div('','row').node;
        this.textBox = new Div(todo, 'text-box');
        this.completeBtn = new ButtonIMG(IMGcheck.src, 'complete-btn');
        this.delBtn = new ButtonIMG(IMGdelete.src, 'del-btn');
        this.delBtn2 = new ButtonIMG(IMGdelete.src, 'del-btn');
        this.backBtn = new ButtonIMG(IMGback.src, 'done-btn');
    }
    addRow(){
        [this.textBox, this.completeBtn, this.delBtn].forEach((dom) => {
            //forEach   각각에 대해 함수를 적용하겠다는 매서드.
            this.row.appendChild(dom.node); // row밑에 각각의 textBox, completetbtn, delBtn 넣는다는 것
        })
        return this.row;
    }

    addRowComplete(){
        [this.textBox, this.backBtn, this.delBtn2].forEach((dom) => {
            //forEach   각각에 대해 함수를 적용하겠다는 매서드.
            this.row2.appendChild(dom.node); // row밑에 각각의 textBox, completetbtn, delBtn 넣는다는 것
        })
        return this.row2;
    }


    getRow(){
        return this.row;
    }
    getRow2(){
        return this.row2;
    }
    getCompleteBtn(){
        return this.completeBtn.node;
    }
    getDelBtn(){
        return this.delBtn.node;
    }
    getDelBtn2(){
        return this.delBtn2.node;
    }
    getBackBtn(){
        return this.backBtn.node;
    }
    getInnerText(){
        return this.textBox.node;
    }
}

export default Todo;