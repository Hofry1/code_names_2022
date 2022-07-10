function init() {

}

function cardClick() {
    
}

function showSpymaster() {
    if (activeSpymaster == 0) {
        spymaster.innerHTML = "Показать игровую доску";
        activeSpymaster = 1;
        return;
    }
    spymaster.innerHTML = "Доска спаймастера";
    activeSpymaster = 0;
    return;
}

function colorsAssignment() {

}

function wordsAssignment() {

}

let activeSpymaster = 0;
const cardsNum = 25;
const redNum = 9;
const blueNum = 8;
let playingTeam = "red";
const grid = document.getElementsByClassName("grid-container")[0];
const cards = grid.children;
const spymaster = document.getElementById("spymaster-button");
spymaster.addEventListener('click', showSpymaster)

for (let i = 0; i < cardsNum; i++) {
    cards[i].onclick = cardClick();
}