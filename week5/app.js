//1. JS 파일에서 접근해야하는 html dom 요소들 선언

const myHandText = document.getElementById("my-hand-text");
const myHandIcon = document.getElementById("my-hand-icon");

const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const papaerBtn = document.getElementById("paper");

const gameResult = document.getElementById("display-result"); // 게임결과 출력 위함

//2. 선언한 dom 요소에 이벤트 생성

rockBtn.addEventListener("click", displayMyChoice);
scissorsBtn.addEventListener("click", displayMyChoice);
papaerBtn.addEventListener("click", displayMyChoice);

//3. 함수

function displayMyChoice(e) {
    let clickedBtn = e.currentTarget.id; //rock, scissors, paper // 
    let clickedIcon = e.target.className;
    //e.target.id는 rockbtn
    //e.target.classNamedms fa-regular fa-hand...
    //e.currentTarget.id는 rock
    //e.currentTarget.className은 안뜸
    //e.currentTarget은 <button id="rock">
    //e.target은 <i id="rockBtn" class="fa-regular fa-hand-back-fist change" aria-hidden="true">flex

    myHandText.innerText = clickedBtn;
    //<div id="my-hand-text">rock</div>
    myHandIcon.className = clickedIcon;
    //<i id="my-hand-icon" class="fa-regular fa-hand-back-fist change" aria-hidden="true">…</i>

    // console.log(myHandText)//콘솔 확인용
    // console.log(myHandIcon)//콘솔 확인용

    start(clickedBtn);
}

function getComChoice() {
    const randomValue = {
        0: ["rock", "fa-regular fa-hand-back-fist"],
        1: ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2: ["paper", "fa-regular fa-hand"],
    };

    const randomIndex = Math.floor(Math.random() * 3);

    return randomValue[randomIndex];
}

function displayComChoice(result) {
    computerText.innerText = result[0];
    computerIcon.className = result[1];
}

function start(myChoice) {
    let resultArray = getComChoice();
    displayComChoice(resultArray);

    //console.log(resultArray); //확인용 - ['paper', 'fa-regular fa-hand'] 출력
    // <div id="display-result">win</div> 바꿔야 할 것.
    // gameResult.innerText = "" // 바꾸는 로직

    /* 게임 플레이 로직 */
    let my = myHandText.innerText; // 내가 낸 것 my에 저장
    let com = resultArray[0]; // com이 낸 것 com에 저장

    if (my == "rock" && com == "scissors") {
        gameResult.innerText = "win";
    } else if (my == "scissors" && com == "paper") {
        gameResult.innerText = "win";
    } else if (my == "paper" && com == "rock") {
        gameResult.innerText = "win";
    } else if (my == "rock" && com == "paper") {
        gameResult.innerText = "lose";
    } else if (my == "scissors" && com == "rock") {
        gameResult.innerText = "lose";
    } else if (my == "paper" && com == "scissors") {
        gameResult.innerText = "lose";
    } else {
        gameResult.innerText = "draw";
    }
    
    // console.log(my, com);
    // console.log(gameResult.innerText); // 확인용
}