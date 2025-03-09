function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
    stopMusic();
}

function calculateResult() {
    document.getElementById("display").value = "Mahal mo nga, mahal ka ba?";
    playMusic();
}

function playMusic() {
    let music = document.getElementById("bgMusic");
    music.play();
}

function stopMusic() {
    let music = document.getElementById("bgMusic");
    music.pause();
    music.currentTime = 0;
}
