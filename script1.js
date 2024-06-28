let input = document.querySelectorAll("input");
document.addEventListener("DOMContentLoaded", () => {
    let timeRemaining = 119; 
    let timer = document.getElementById("timer");

    function formatTime(seconds) {
        let mins = Math.floor(seconds / 60);
        let secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }

    function startTimer() {
        let timerInterval = setInterval(() => {
            if (timeRemaining > 0) {
                timeRemaining--;
                timer.innerText = formatTime(timeRemaining);
            } else {
                clearInterval(timerInterval);
                timer.innerText = "00:00";
                for (let i = 0; i < 3; i++) {
                    input[i].readOnly = true;                    
                }
            }
        }, 1000);
    }

    timer.innerText = formatTime(timeRemaining);
    startTimer();
});