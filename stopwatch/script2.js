let [seconds, minutes, hours] = [0, 0, 0];
let displaytime = document.querySelector('.zero');
let timer = null;

let play = document.querySelector('#play');
play.addEventListener('click', watchstart);

function stopewatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h=hours < 10? '0'+hours:hours
    let m=minutes < 10? '0'+minutes:minutes
    let s=seconds < 10? '0'+seconds:seconds
    displaytime.innerHTML = h + ':' + m + ':' + s;
}

function watchstart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopewatch, 1000);
}
let stopbtn=document.querySelector('#stop')
stopbtn.addEventListener('click',stop)
function stop(){
    clearInterval(timer)
}

let restbtn=document.querySelector('#reset')
restbtn.addEventListener('click',restshow)
function  restshow(){
    clearInterval(timer)
let [seconds, minutes, hours] = [0,0,0];
displaytime.innerHTML="00:00:00"


}