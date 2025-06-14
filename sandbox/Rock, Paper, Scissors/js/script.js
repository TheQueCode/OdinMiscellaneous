//Getting computer's choice

function getComputerChoice () {
  const computerPick = Math.floor(Math.random() * 3 + 1);
  if (computerPick === 1) {
    computerChoice = 'rock';
  } else if(computerPick === 2) {
    computerChoice = 'paper';
  } else {computerPick === 3} {
    computerChoice = 'scissors';
  }
  return computerChoice;
}

// Getting Human's choice

function getHumanChoice () {
  const humanChoice = prompt('Enter your pick: Rock, Paper, or Scissors: ');
  return humanChoice;
}

// playing 5 rounds

function playGame () {

  // Scores
  let humanScore = 0;
  let computerScore = 0;

  // Playing a single round

  function playRound (humanChoice, computerChoice) {

    const plainHumanChoice = humanChoice.toLowerCase();
    const fancyHumanChoice = plainHumanChoice[0].toUpperCase() + plainHumanChoice.slice(1);
    const fancyComputerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1);
    if (plainHumanChoice === computerChoice) {
      console.log(`Player Choice: ${fancyHumanChoice}`);
      console.log(`Computer Choice: ${fancyComputerChoice}`);
      console.log(`Tie! Try again!`);
      console.log(`Player Score: ${humanScore}`);
      console.log(`Computer Score: ${computerScore}`);
    } else if ((plainHumanChoice === 'rock' && computerChoice === 'scissors') || (plainHumanChoice === 'scissors' && computerChoice === 'paper') || (plainHumanChoice === 'paper' && computerChoice === 'rock')) {
      console.log(`Player Choice: ${fancyHumanChoice}`);
      console.log(`Computer Choice: ${fancyComputerChoice}`);
      console.log(`You win! ${fancyHumanChoice} beats ${fancyComputerChoice} Yay!`);
      humanScore++;
      console.log(`Player Score: ${humanScore}`);
      console.log(`Computer Score: ${computerScore}`);    
    } else {
      console.log(`Player Choice: ${fancyHumanChoice}`);
      console.log(`Computer Choice: ${fancyComputerChoice}`);
      console.log(`You lose! ${computerChoice} beats ${humanChoice}. Try again.`);
      computerScore++;
      console.log(`Player Score: ${humanScore}`);
      console.log(`Computer Score: ${computerScore}`);
    }
  }
  for (let i = 1; i <= 5; i++) {
    // Declaring
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}

playGame();
