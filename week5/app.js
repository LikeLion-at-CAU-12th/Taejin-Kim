//1. JS 파일에서 접근해야하는 html dom 요소들 선언

const myHandText = document.getElementById("my-hand-text");
const myHandIcon = document.getElementById("my-hand-icon");
const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");
const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const papaerBtn = document.getElementById("paper");

const gameResult = document.getElementById("display-result"); // 게임결과 출력 위함
const myScore = document.getElementById("my-score"); // 내 점수 표시 위함
const comScore = document.getElementById("com-score"); // 컴퓨터 점수 표시 위함

const reset = document.getElementById("reset-button"); // 리셋

var myGameScore = 0; // 전역변수 내 점수 선언
var comGameScore = 0; // 전역변수 컴퓨터 점수 선언

const backColor = document.getElementById("body"); // 배경바꾸기 위함
const changeMode = document.getElementById("darkMode"); // darkmode 버튼
const lineContents = document.getElementById("contents-wrapper"); // 라인 색 바꾸기 위함
const lineTitle1 = document.getElementById("display-title1"); // 라인 색 바꾸기 위함
const lineTitle2 = document.getElementById("display-title2");
const lineRockBtn = document.getElementById("rockBtn");
const lineScissorsBtn = document.getElementById("scissorsBtn");
const linePaperBtn = document.getElementById("paperBtn");

//2. 선언한 dom 요소에 이벤트 생성

rockBtn.addEventListener("click", displayMyChoice);
scissorsBtn.addEventListener("click", displayMyChoice);
papaerBtn.addEventListener("click", displayMyChoice);

reset.addEventListener("click", allReset);

changeMode.addEventListener("click", chooseMode);


//3. 함수
function allReset() {
    myScore.innerText = null;
    comScore.innerText = null;
    myHandText.innerText = null;
    myHandIcon.className = null;
    computerText.innerText = null;
    computerIcon.className = null;
    gameResult.innerText = null;
    myGameScore = 0;
    comGameScore = 0;
}
// 대입되었던 값 전부 null로 초기화.



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
    let com = resultArray[0]; // 컴퓨터가 낸 것 com에 저장

    if (my == "rock" && com == "scissors") {
        gameResult.innerText = "win";
        myGameScore++;
        comGameScore--;
    } else if (my == "scissors" && com == "paper") {
        gameResult.innerText = "win";
        myGameScore++;
        comGameScore--;
    } else if (my == "paper" && com == "rock") {
        gameResult.innerText = "win";
        myGameScore++;
        comGameScore--;
    } else if (my == "rock" && com == "paper") {
        gameResult.innerText = "lose";
        myGameScore--;
        comGameScore++;
    } else if (my == "scissors" && com == "rock") {
        gameResult.innerText = "lose";
        myGameScore--;
        comGameScore++;
    } else if (my == "paper" && com == "scissors") {
        gameResult.innerText = "lose";
        myGameScore--;
        comGameScore++;
    } else {
        gameResult.innerText = "draw";
    }

    myScore.innerText = myGameScore;
    comScore.innerText = comGameScore;
}

//4. css조작

/* 현재 버튼이 무엇인지에 따라 실행할 함수 고르는 로직 */
function chooseMode(){
    if (changeMode.innerText == "WhiteMode"){
        setWhiteMode();
    } else {
        setDarkMode();
    }
}

/* 다크모드 함수 */
function setDarkMode(){
    backColor.style.backgroundColor = "#000000";
    backColor.style.color = "#FFFFFF";
    reset.style.borderColor = "#FFFFFF";
    reset.style.color = "#000000";
    reset.style.backgroundColor = "#FFFFFF";
    lineContents.style.borderColor = "#FFFFFF";
    computerIcon.style.borderColor = "#FFFFFF";
    lineTitle1.style.borderBottomColor = "#FFFFFF";
    lineTitle2.style.borderBottomColor = "#FFFFFF";
    changeMode.innerText = "WhiteMode";
    lineRockBtn.style.borderColor = "#FFFFFF";
    lineScissorsBtn.style.borderColor = "#FFFFFF";
    linePaperBtn.style.borderColor = "#FFFFFF";
    
    
}

/* 화이트모드 함수 */
function setWhiteMode(){
    backColor.style.backgroundColor = "#FFFFFF";
    backColor.style.color = "#000000";
    reset.style.borderColor = "#000000";
    reset.style.color = "#FFFFFF";
    reset.style.backgroundColor = "#000000";
    lineContents.style.borderColor = "#000000";
    computerIcon.style.borderColor = "#000000";
    lineTitle1.style.borderBottomColor = "#000000";
    lineTitle2.style.borderBottomColor = "#000000";
    changeMode.innerText = "DarkMode";
    lineRockBtn.style.borderColor = "#000000";
    lineScissorsBtn.style.borderColor = "#000000";
    linePaperBtn.style.borderColor = "#000000";
}