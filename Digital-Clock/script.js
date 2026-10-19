let currentTime = document.getElementById("clock")

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

    let hrminsecs = hour + ":" + min + ":" + secs + " " + am_pm

    return hrminsecs
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

    let hrminsecs = hour + ":" + min + ":" + secs + " " + am_pm

    return hrminsecs
}

function showTime() {
    let time = new Date();
    currentTime.innerText = set12hrs(time)
}

setInterval(showTime, 1000);
showTime()