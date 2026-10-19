let currentTime = document.getElementById("clock")

let HR_12 = document.getElementById("12HR")
let HR_24 = document.getElementById("24HR")

let flag = 0;

function formatTime(hour, min, secs, am_pm) {
    return String(hour).padStart(2, "0") + ":" + String(min).padStart(2, "0") + ":" + String(secs).padStart(2, "0") + " " + am_pm
}

function set12hrs(time) {
    let hour = time.getHours();
    let min = time.getMinutes();
    let secs = time.getSeconds();

    let am_pm = "AM";

    if (hour >= 12) {
        am_pm = "PM"
        if (hour > 12) {
            hour = hour - 12;
        }
    } else if (hour < 12) {
        am_pm = "AM";
        if (hour == 0) {
            hour = 12;
        }
    }

    return formatTime(hour, min, secs, am_pm)
}

function set24hrs(time) {
    let hour = time.getHours();
    let min = time.getMinutes();
    let secs = time.getSeconds();

    let am_pm = "AM";

    if (hour >= 12) {
        am_pm = "PM";
    } else {
        am_pm = "AM";
    }

    return formatTime(hour, min, secs, am_pm)
}

function flag_12() {
    flag = 0
}

function flag_24() {
    flag = 1
}

function showTime() {
    let time = new Date();

    console.log(flag)

    if (flag == 0) {
        currentTime.innerText = set12hrs(time);
    } else if (flag == 1) {
        currentTime.innerText = set24hrs(time);
    }
}

HR_12.addEventListener("click", flag_12);
HR_24.addEventListener("click", flag_24);

setInterval(showTime, 1000);
showTime()