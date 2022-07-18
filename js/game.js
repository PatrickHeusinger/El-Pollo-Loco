let canvas;
let world;
let keyboard = new Keyboard();
let gameStarted = false;
let backgroundSound = new Audio('audio/backgroundSound.mp3');
backgroundSound.volume = 0.1;
arribaSound = new Audio('audio/Yeehah Arriva.mp3');



function init() {
    canvas = document.getElementById('canvas');

}


function startScreen() {
    setTimeout(() => {
        document.getElementById('start').classList.add('d-none');
        document.getElementById('manual').classList.add('d-none');
        document.getElementById('canvas').classList.remove('d-none');
        document.getElementById('gameCounter').classList.remove('d-none');
        document.getElementById('highScore').classList.remove('d-none');
        initLevel();
        world = new World(canvas, keyboard);
        gameStarted = true;
        backgroundSound.play();
        start();

    }, 100);
}

function restartGame() {
    document.getElementById('restartButton').classList.add('d-none');
    document.getElementById('start').classList.remove('d-none');
    document.getElementById('manual').classList.remove('d-none');
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('gameCounter').classList.add('d-none');
    document.getElementById('highScore').classList.add('d-none');
    location.reload();
}


const checkScore = setInterval(checkTimer, 1000);

function checkTimer() {
    if (gameStarted == true) {
        if (world.endscreen) {
            stop();

            console.log(highScore);
        }
    }
}


window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }

});

window.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});

/*-----------------------------counter------------------------*/

let msec = 0;
let sec = 1;
let min = 1;
let hour = 1;
let timerOn = 0;
let msecVar;
let secVar;
let minVar;
let hourVar;
let highScore;

function setMSec() {
    if (msec < 10) {
        document.getElementById("msec").innerHTML = "0" + msec;
    } else {
        document.getElementById("msec").innerHTML = msec;
    }
    msec = msec + 1;
    msecVar = setTimeout(setMSec, 100);
    if (msec >= 10) {
        setSec();
        msec = 0;
    }
}

function setSec() {
    if (sec >= 60) {
        setMin();
        sec = 0;
    }
    if (sec < 10) {
        document.getElementById("sec").innerHTML = "0" + sec;
    } else {
        document.getElementById("sec").innerHTML = sec;
    }
    sec = sec + 1;
}

function setMin() {
    if (min >= 60) {
        setHour();
        min = 0;
    }
    if (min < 10) {
        document.getElementById("min").innerHTML = "0" + min;
    } else {
        document.getElementById("min").innerHTML = min;
    }
    min = min + 1;
}

function setHour() {
    if (hour < 10) {
        document.getElementById("hour").innerHTML = "0" + hour;
    } else {
        document.getElementById("hour").innerHTML = hour;
    }
    hour = hour + 1;
}

function start() {
    if (!timerOn) {
        timerOn = 1;
        setMSec();
    }
}

function stop() {
    clearTimeout(msecVar);
    clearInterval(checkScore);
    timerOn = 0;
    if (sec == 0 && msec == 0) {
        sec = sec;
        msec = msec;
    } else {
        sec = sec - 1;
        msec = msec - 1;
    }
    backgroundSound.pause();
    //  highScore = 'YOUR TIME : ' + sec + ',' + msec + ' SECONDS';
    //  document.getElementById('highScore').innerHTML = '';
    //  document.getElementById('highScore').innerHTML = highScore;
    document.getElementById('restartButton').classList.remove('d-none');
}