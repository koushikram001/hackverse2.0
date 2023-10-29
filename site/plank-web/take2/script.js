let score = 0;
let lastMouseX = 0;
let lastMouseY = 0;

const scoreElement = document.getElementById('score');

function updateScore() {
    score++;
    scoreElement.textContent = score;
}

function onMouseMove(event) {
    const currentMouseX = event.clientX;
    const currentMouseY = event.clientY;

    if (currentMouseX !== lastMouseX || currentMouseY !== lastMouseY) {
        // Mouse pointer has moved, decrement score
        score--;
        score = Math.max(score, 0); // Ensure score is non-negative
        scoreElement.textContent = score;
    }

    lastMouseX = currentMouseX;
    lastMouseY = currentMouseY;
}

setInterval(updateScore, 2000); // Add 1 point every 2 seconds

document.addEventListener('mousemove', onMouseMove);
