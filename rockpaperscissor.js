
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let userinput = "";
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0
};

const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const resetButton = document.getElementById('reset');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

button1.addEventListener('click', function() {
    userinput = "rock";
    game();
});

button2.addEventListener('click', function() {
    userinput = "paper";
    game();
});

button3.addEventListener('click', function() {
    userinput = "scissors";
    game();
});

resetButton.addEventListener('click', function() {
    score.wins = 0;
    score.losses = 0;
    localStorage.setItem('score', JSON.stringify(score));
    scoreDiv.innerHTML = `User wins: ${score.wins} | Computer wins: ${score.losses}`;
});

function game() {
    const Random = getRandomInt(1, 3);
    let computerChoice = "";

    if (Random === 1) {
        computerChoice = "rock";
    } else if (Random === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    let result = "";

    if ((computerChoice === "rock" && userinput === "paper") ||
        (computerChoice === "paper" && userinput === "scissors") ||
        (computerChoice === "scissors" && userinput === "rock")) {
        result = "User wins";
        score.wins++;
    } else if ((computerChoice === "rock" && userinput === "scissors") ||
               (computerChoice === "paper" && userinput === "rock") ||
               (computerChoice === "scissors" && userinput === "paper")) {
        result = "Computer wins";
        score.losses++;
    } else {
        result = "It's a draw";
    }

    localStorage.setItem('score', JSON.stringify(score));

    resultDiv.innerHTML = `User chose: ${userinput} <br> Computer chose: ${computerChoice} <br> ${result}`;
    scoreDiv.innerHTML = `User wins: ${score.wins} | Computer wins: ${score.losses}`;
}

// Initialize the score display
scoreDiv.innerHTML = `User wins: ${score.wins} | Computer wins: ${score.losses}`;
