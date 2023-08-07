const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const history = [];

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  let roundResult = "";

  if (playerSelection === computerSelection) {
    roundResult = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    roundResult = `<span class="win">You win! ${playerSelection} beats ${computerSelection}.</span>`;
    playerScore++;
  } else {
    roundResult = `<span class="lose">You lose! ${computerSelection} beats ${playerSelection}.</span>`;
    computerScore++;
  }

  updateResult(roundResult);
  updateHistory(roundResult);
  updateScoreboard();
}

function updateResult(roundResult) {
  document.getElementById("result").innerHTML = roundResult;
}

function updateHistory(roundResult) {
  history.push({ roundResult, result: `${playerScore} - ${computerScore}` });
  if (history.length > 10) {
    history.shift();
  }
  document.getElementById("history").innerHTML = history
    .map((item) => `<li>${item.roundResult} <span>${item.result}</span></li>`)
    .join("");
}

function updateScoreboard() {
  document.getElementById("player-score").innerHTML = playerScore;
  document.getElementById("computer-score").innerHTML = computerScore;

  if (playerScore === 5 || computerScore === 5) {
    let finalResult = playerScore > computerScore ? "You won!" : "You lost!";
    document.getElementById("result").innerHTML = `<span class="${
      playerScore > computerScore ? "win" : "lose"
    }">${finalResult} Final score: ${playerScore} - ${computerScore}</span>`;
    playerScore = 0;
    computerScore = 0;
    history.length = 0;
  }
}
