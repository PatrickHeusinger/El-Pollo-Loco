let canvas;
let world;
let keyboard = new Keyboard();



function init() {
    canvas = document.getElementById('canvas');

}

function startScreen() {

    setTimeout(() => {
        document.getElementById('start').classList.add('d-none');
        document.getElementById('canvas').classList.remove('d-none');
        document.getElementById('gameCounter').classList.remove('d-none');
        initLevel();
        start();
        world = new World(canvas, keyboard);
        checkTimer();
    }, 100);
}

function checkTimer() {
    setInterval(() => {
        if (world.endscreen) {
            stop();
        }
    }, 100);

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
    timerOn = 0;
}