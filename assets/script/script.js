const options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
const history = [];

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  let roundResult = '';

  if (playerSelection === computerSelection) {
    roundResult = "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    roundResult = '<span style="color:green">You win! ' + playerSelection + ' beats ' + computerSelection + '.</span>';
    playerScore++;
  } else {
    roundResult = '<span style="color:red">You lose! ' + computerSelection + ' beats ' + playerSelection + '.</span>';
    computerScore++;
  }

  let result = playerScore + ' - ' + computerScore;
  if (playerScore > computerScore) {
    result = '<span style="color:green">' + result + '</span>';
  } else if (computerScore > playerScore) {
    result = '<span style="color:red">' + result + '</span>';
  } else {
    result = '<span>' + result + '</span>';
  }

  document.getElementById('result').innerHTML = roundResult;

  // Update history
  history.push({ roundResult, result });
  if (history.length > 10) {
    history.shift();
  }
  let historyList = '';
  for (let i = 0; i < history.length; i++) {
    historyList += '<li>' + history[i].roundResult + ' ' + history[i].result + '</li>';
  }
  document.getElementById('history').innerHTML = historyList;

  // Update scoreboard
  document.getElementById('player-score').innerHTML = playerScore;
  document.getElementById('computer-score').innerHTML = computerScore;

  if (playerScore === 5 || computerScore === 5) {
    let finalResult = '';
    if (playerScore > computerScore) {
      finalResult = '<span style="color:green">You won!</span>';
    } else {
      finalResult = '<span style="color:red">You lost!</span>';
    }
    document.getElementById('result').innerHTML = finalResult + ' Final score: ' + result;
    playerScore = 0;
    computerScore = 0;
    history.length = 0;
  }
}
