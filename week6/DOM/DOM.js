class DOM{
    constructor(tagName, innerText, className){
        this.node = document.createElement(tagName);
        this.node.innerText = innerText;
        if (className) this.node.classList.add(className); // 클래스 네임 여러개 있을 수 있으니까, 그거 하나 추가해 준다는 의미

    }
}

export default DOM; // class 네임이랑 이름 똑같아야 함.