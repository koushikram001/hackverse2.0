const gameContainer = document.getElementById('game');
const scoreElement = document.getElementById('points');

let score = 0;
let gameStarted = false;

function startGame() {
    gameStarted = true;
    score = 0;
    updateScore();
    gameContainer.style.backgroundColor = '#ddd';
    gameContainer.addEventListener('mousemove', onMouseMove);
    setTimeout(endGame, 10000); // Game ends after 10 seconds
}

function endGame() {
    gameStarted = false;
    gameContainer.style.backgroundColor = 'red';
    gameContainer.removeEventListener('mousemove', onMouseMove);
    alert(`Game Over! Your score: ${score}`);
}

function onMouseMove() {
    if (gameStarted) {
        score++;
        updateScore();
    }
}

function updateScore() {
    scoreElement.textContent = score;
}

gameContainer.addEventListener('click', startGame);
