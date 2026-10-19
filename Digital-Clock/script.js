let currentTime = document.getElementById("clock")

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let secs = time.getSeconds();

    currentTime.innerText = hour + ":" + min + ":" + secs
}

showTime()