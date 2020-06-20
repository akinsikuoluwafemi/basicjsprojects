let countdown;
const timerDisplay = document.querySelector('.display__time-left');

function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);


    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop it;

        if (secondsLeft < 0){
            clearInterval(countdown);
            return;
        }

        // display it
        displayTimeLeft(secondsLeft);
    }, 1000);
}

timer(120)

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
}



// function displayTimeLeft(seconds) {
//     const hours = Math.floor(seconds / 3600);
//     const remainderMin = seconds % 3600;
//     console.log({hours, remainderMin});
// }

// displayTimeLeft(10802)


