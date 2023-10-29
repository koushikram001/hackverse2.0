const box = document.getElementById("box");
const score = document.getElementById("score");
const points = document.getElementById("points");

let isInBox = false;
let scoreValue = 0;
let timer;

// Function to start the game
function startGame() {
    scoreValue = 0;
    points.textContent = scoreValue;
    isInBox = true;
    box.style.backgroundColor = "green";
    timer = setInterval(increaseScore, 2000); // Increase score every 2 seconds
}

// Function to increase the score
function increaseScore() {
    scoreValue++;
    points.textContent = scoreValue;
}

// Function to end the game
function endGame() {
    isInBox = false;
    box.style.backgroundColor = "red";
    clearInterval(timer);
    alert(`Game over! Your score: ${scoreValue}`);
}

// Event listeners for mouse enter and mouse leave
box.addEventListener("mouseenter", startGame);
box.addEventListener("mouseleave", endGame);
