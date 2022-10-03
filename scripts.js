let count = 0;

const value = document.querySelector("#values");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')){
            count--;
        } else if (styles.contains('increase')){
            count++;
        } else {
            count = 0;
        }
        if (count > 0){
            value.style.color = "white"
        } 
        if (count < 0){
            value.style.color = "yellow"
        } 
        if (count === 0){
            value.style.color = "orange"
        }
        value.textContent = count;
    })
});

//Increment on clicks
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let textEl = document.querySelectorAll(".text")
let countt = 0;
 console.log(textEl)

function increase() {
    countt +=  1
    countEl.textContent = countt;
}

// // Lesson: The Document Object Model
// 1. Create the save button: create a function, save (), which logs out the count when it's called?
    function save() {
        let countStr = countt +  " - "
        saveEl.textContent += countStr 
        console.log(countt)
        countEl.textContent = 0
        countt = 0
    }
// Debugging Online: Go to Google and search (innertext alternative mdn)

// Backgroun Changer
const colors = ["red", "green", "white", "chartreuse", "yellow", "gold", "orange", "indigo", "goldenrod"];

const btn = document.getElementById("btnn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor (Math.random() * colors.length);
}
 
// Countdown Project 
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

// const newYears = "1/01/2022";
const electionYear = "2/14/2023";

function countdown() {
    const electionYearDate = new Date(electionYear);
    const currentDate = new Date();

    const totalSeconds = (electionYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor( (totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds) % 60;

    // console.log(days, hours, mins, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time){
return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000); 
