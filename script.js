const greeting = "Hello World";
console.log(greeting);

const selections = ["rock", "paper", "scissors"];
const userInput = prompt("Choose either rock, paper or scissors: ").toLowerCase();

function rockPaperscissors() {
  if (!selections.includes(userInput)) {
    console.log("invalid selection");
    return;
  }

  const computer = Math.floor(Math.random() * selections.length);
  const computerChoice = selections[computer];

  console.log(`\nYou Choose: ${userInput}`);
  console.log(`\ncomputerChoice: ${computerChoice}`);

  if (computerChoice === userInput) {
    console.log("Its a tie");
    alert("its a tie");
    return;
  } else if (userInput == "rock" && computerChoice == "scissors") {
    console.log("User wins");
    alert("user wins");
  } else if (userInput == "paper" && computerChoice == "rock") {
    console.log("User wins");
    alert("user wins");
  } else if (userInput == "scissors" && computerChoice == "paper") {
    console.log("user wins");
    alert("user wins");
  } else {
    console.log("Computer Wins!");
    alert("Computer wins");
  }
}

rockPaperscissors();
