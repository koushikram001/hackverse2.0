let points = 0;
let highScore = 0;
let isMoving = false;
let timer;

const pointsDisplay = document.getElementById('points');
const highScoreDisplay = document.getElementById('highScore');

document.addEventListener('mousemove', () => {
    if (!isMoving) {
        isMoving = true;
        clearInterval(timer);
        if (points > highScore) {
            highScore = points;
            highScoreDisplay.textContent = highScore;
        }
        alert(`Game Over! Your Score: ${points}`);
        points = 0;
        pointsDisplay.textContent = points;
        isMoving = false;
        startTimer();
    }
});

function startTimer() {
    timer = setInterval(() => {
        points++;
        pointsDisplay.textContent = points;
    }, 2000);
}

startTimer();
