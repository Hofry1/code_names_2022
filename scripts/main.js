function init() {
    window.playingTeam = 0;
}

function cardPress() {
    if (playingTeam == 0)
        event.target.style.background = "red";
    else 
        event.target.style.background = "blue";
}