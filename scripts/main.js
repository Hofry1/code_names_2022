function init() {
    for (let i = 0; i < cardsNum; i++) {
        cards[i].innerHTML = wordBoard[i];
        cards[i].classList.add(colorBoard[i]);
        cards[i].onclick = cardClick;
    }
}

function cardClick(evt) {
    if (activeSpymaster == 1) {
        return;
    }
    if (playingTeam == "r") {
        if (colorBoard[evt.target.id] == "r") {
            cards[evt.target.id].classList.add("shown");
            redNum--;
            redScore.innerHTML = `Осталось красных: ${redNum}`;
            if (redNum == 0) {
                endGame("r");
            }
            return;
        }
        if (colorBoard[evt.target.id] == "b") {
            cards[evt.target.id].classList.add("shown");
            blueNum--;
            blueScore.innerHTML = `Осталось синих: ${blueNum}`;
            if (blueNum == 0) {
                endGame("b");
            }
            flipTurn();
            return;
        }
        if (colorBoard[evt.target.id] == "n") {
            cards[evt.target.id].classList.add("shown");
            flipTurn();
            return;
        }
        if (colorBoard[evt.target.id] == "a") {
            cards[evt.target.id].classList.add("shown");
            endGame("b");
            return;
        }
    }
    if (colorBoard[evt.target.id] == "r") {
        cards[evt.target.id].classList.add("shown");
        redNum--;
        redScore.innerHTML = `Осталось красных: ${redNum}`;
        if (redNum == 0) {
            endGame("r");
        }
        flipTurn();
        return;
    }
    if (colorBoard[evt.target.id] == "b") {
        cards[evt.target.id].classList.add("shown");
        blueNum--;
        blueScore.innerHTML = `Осталось синих: ${blueNum}`;
        if (blueNum == 0) {
            endGame("b");
        }
        return;
    }
    if (colorBoard[evt.target.id] == "n") {
        cards[evt.target.id].classList.add("shown");
        flipTurn();
        return;
    }
    if (colorBoard[evt.target.id] == "a") {
        cards[evt.target.id].classList.add("shown");
        endGame("r");
        return;
    }
    return;
}

function showSpymaster() {
    if (activeSpymaster == 0) {
        spymaster.innerHTML = "Показать игровую доску";
        activeSpymaster = 1;
        for (let i = 0; i < cardsNum; i++) {
            cards[i].classList.add("spymaster");
        }
        return;
    }
    spymaster.innerHTML = "Доска спаймастера";
    activeSpymaster = 0;
    for (let i = 0; i < cardsNum; i++) {
        cards[i].classList.remove("spymaster");
    }
}

function newGame() {
    
}

function endGame(winner) {
    for (let i = 0; i < cardsNum; i++) {
        cards[i].onclick = "";
        teamTurn.innerHTML = `Победитель: ${winner == "r" ? "Красные" : "Синие"}`
    }
}

function flipTurn() {
    if (playingTeam == "r") {
        playingTeam = "b";
        teamTurn.innerHTML = "Ход синих";
        team.style.background = "blue";
        return;
    }
    playingTeam = "r";
    teamTurn.innerHTML = "Ход красных";
    team.style.background = "red";
}

const colorBoard = ["r", "r", "b", "r", "n", "r", "a", "r", "r", "r", "b", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r"];
const wordBoard = ["hi", "", "", "asdf", "", "", "", "", "", "hi", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

let activeSpymaster = 0;
const cardsNum = 25;
let redNum = 9;
let blueNum = 8;
let playingTeam = "r";
const grid = document.getElementsByClassName("grid-container")[0];
const cards = grid.children;
const spymaster = document.getElementById("spymaster-button");
const team = document.getElementsByClassName("team")[0];
const teamTurn = document.getElementById("team-turn");
const redScore = document.getElementById("red-score");
const blueScore = document.getElementById("blue-score");
spymaster.addEventListener('click', showSpymaster);

init();