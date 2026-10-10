const greeting = "Hello World";
console.log(greeting);

function getComputerChoice() {
  const selections = ["rock", "paper", "scissors"];
  const computer = Math.floor(Math.random() * selections.length);
  const computerChoice = selections[computer];
  return computerChoice;
}

//const userInput = prompt("Choose either rock, paper or scissors: ").toLowerCase();

function rockPaperscissors(playerSelection, computerSelection) {
  console.log(`Player choose: ${playerSelection}`);
  console.log(`Computer chose: ${computerSelection}`)

  /*  if (!selections.includes(userInput)) {
    console.log("invalid selection");
    return;
  }
*/

//  console.log(`\nYou Choose: ${userInput}`);
//  console.log(`\ncomputerChoice: ${computerChoice}`);

  if (playerSelection === computerSelection) {
    console.log("Its a tie");
    alert("its a tie");
    return "its a tie";

  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("User wins");
    alert("user wins this round");
    return "user wins";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("User wins");
    alert("user wins this round");
    return "user wins";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("user wins");
    alert("user wins this round");
    return "user wins";
  } else {
    console.log("Computer Wins!");
    alert("Computer wins this round");
    return "computer wins";
  }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors')

rock.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  console.log(rockPaperscissors('rock', computerSelection));
  console.log("--------------");
});

paper.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  console.log(rockPaperscissors('paper', computerSelection));
});

scissors.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  console.log(rockPaperscissors('scissors', computerSelection));
});
