import DOM from "./DOM.js"

class Div extends DOM{
    constructor(innerText, className){
        super('div', innerText, className); //부모요소에 접근하는 방법
    }

}

export default Div;