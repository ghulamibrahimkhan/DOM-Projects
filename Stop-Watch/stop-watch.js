// variable for btns
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn')

// variables for time values
let seconds = 0;
let minutes = 0
let hours = 0


function stopWatch() {
    seconds++

    if (seconds / 60 === 1) {
        seconds = 0
        minutes++
        if (minutes / 60 === 1) {
            minutes = 0
            hours++
        }
    }

    let ledSec = seconds < 10 ? '0' + seconds.toString() : seconds
    let ledMin = minutes < 10 ? '0' + minutes.toString() : minutes
    let ledHour = hours < 10 ? '0' + hours.toString() : hours


    let displayText = document.getElementById('timer').innerText = `${ledHour}:${ledMin}:${ledSec}`
}


// var set interval & timemer
let timerInterval = null;
let timerStatus = 'stopped'

startStopBtn.addEventListener('click', function () {
    if (timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch, 100)
        document.getElementById('startStopBtn').innerHTML = `<i
        class='fa-solid fa-pause' id='pause'></i>`
        timerStatus = 'started'
    }
    else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id='play'></i>`
        timerStatus = 'stopped';
    }
})

resetBtn.addEventListener('click',function(){
    window.clearInterval(timerInterval)
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerText=("00:00:00")

    
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id='play'></i>`
    timerStatus = 'stopped';

})