document.addEventListener('DOMContentLoaded', () => {
    const startStopBtn = document.getElementById('startStopBtn');
    const lapResetBtn = document.getElementById('lapResetBtn');
    const minutesElem = document.getElementById('minutes');
    const secondsElem = document.getElementById('seconds');
    const millisecondsElem = document.getElementById('milliseconds');
    const lapList = document.getElementById('lapList');

    let timerInterval;
    let isRunning = false;
    let elapsedTime = 0;
    let lapCount = 0;

    function formatTime(ms) {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const milliseconds = Math.floor((ms % 1000) / 10);

        return {
            minutes: String(minutes).padStart(2, '0'),
            seconds: String(seconds).padStart(2, '0'),
            milliseconds: String(milliseconds).padStart(2, '0')
        };
    }

    function updateDisplay() {
        const time = formatTime(elapsedTime);
        minutesElem.textContent = time.minutes;
        secondsElem.textContent = time.seconds;
        millisecondsElem.textContent = time.milliseconds;
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            elapsedTime += 10;
            updateDisplay();
        }, 10);
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    function resetTimer() {
        stopTimer();
        elapsedTime = 0;
        updateDisplay();
        lapList.innerHTML = '';
        lapCount = 0;
        startStopBtn.textContent = 'Start';
        isRunning = false;
    }

    function recordLap() {
        lapCount++;
        const time = formatTime(elapsedTime);
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCount}: ${time.minutes}:${time.seconds}:${time.milliseconds}`;
        lapList.appendChild(lapItem);
    }

    startStopBtn.addEventListener('click', () => {
        if (isRunning) {
            stopTimer();
            startStopBtn.textContent = 'Start';
        } else {
            startTimer();
            startStopBtn.textContent = 'Stop';
        }
        isRunning = !isRunning;
    });

    lapResetBtn.addEventListener('click', () => {
        if (isRunning) {
            recordLap();
        } else {
            resetTimer();
        }
    });
});
