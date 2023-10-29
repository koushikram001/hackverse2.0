const gameContainer = document.querySelector('.game-container');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');

let score = 0;
let highScore = 0;
let lastMouseX = null;
let lastMouseY = null;
let gameOver = false;

// Function to update the score
function updateScore() {
    scoreElement.textContent = score;
}

// Function to check if the mouse pointer moved more than 20 pixels
function checkMouseMove(event) {
    if (lastMouseX !== null && lastMouseY !== null && !gameOver) {
        const deltaX = Math.abs(event.clientX - lastMouseX);
        const deltaY = Math.abs(event.clientY - lastMouseY);

        if (deltaX > 2 || deltaY > 2) {
            gameOver = true;
            if (score > highScore) {
                highScore = score;
                highScoreElement.textContent = highScore;
            }
            gameContainer.removeEventListener('mousemove', checkMouseMove);
            alert('Game over! You moved the mouse too much.');
        }
    }
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
}

// Function to increase the score every 2 seconds
function increaseScore() {
    if (!gameOver) {
        score++;
        updateScore();
        setTimeout(increaseScore, 2000);
    }
}

// Initialize the game
function init() {
    score = 0;
    updateScore();
    lastMouseX = null;
    lastMouseY = null;
    gameOver = false;

    gameContainer.addEventListener('mousemove', checkMouseMove);
    increaseScore();
}

init();
