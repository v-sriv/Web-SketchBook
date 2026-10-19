let currentTime = document.getElementById("clock")

function showTime() {
    let time = new Date();
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

    currentTime.innerText = hour + ":" + min + ":" + secs + " " + am_pm
}

showTime()