// Step 2: Write the logic to get the computer choice. Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.
// pseudocode for function resulting computer output rock, paper, or scissors:
// 1. make output of ranged random number, assume 0 to 1
// 2. split the ranged number from 0 to 1 into three subrange: 0-1/3, 1/3-2/3, 2/3-3/3
// 3. each subrange represent rock (0-1/3), paper (1/3-2/3), and scissors (2/3-3/3)
// 4. return the ranged random number in "rock", "paper", or "scissors"

function getComputerChoice(){
    const randomChoice = Math.random();
    if (randomChoice < 1/3) {
        return "rock";
    } else if (randomChoice < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Step 3: Write the logic to get the human choice. Your game will be played by a human player. You will write a function that takes the user choice and returns it.
// pseudocode for function asking human to input rock paper or scissors:
// 1. ask human to write rock, paper or scissors
// 2. save the input
// 3. return the input
function getHumanChoice(){
    let humanChoice = prompt("rock, paper, or scissors?")
    return humanChoice.toLowerCase(); // convert the input to lowercase to make it case-insensitive
}

// Step 4: Declare the players score variables. Your game will keep track of the players score. You will write variables to keep track of the players score.
// pseudocode to keep score for human and computer in each own variable
// 1. create variable to keep score for human with initial value 0
// 2. create variable to keep score for computer with initial value 0

let humanScore = 0;
let computerScore = 0;

// Step 5: Write the logic to play a single round
// pseudocode to play the game:
// 1. Create a new function named playRound.
// 2. Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// 3. Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// 4. Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// 5. Increment the humanScore or computerScore variable based on the round winner.
function playRound (){
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    if (humanChoice === "rock" && computerChoice === "rock"){
        console.log("Draw! rock meets rock");
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! rock beaten by paper");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! rock beats scissors");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "paper"){
        console.log("Draw! paper meets paper");
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! paper beats rock");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! paper beaten by scissors");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "scissors"){
        console.log("Draw! scissors meets scissors");
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! scissors beats paper");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! scissors beaten by rock");
        computerScore++;
    }
    console.log('Results this round: Human: ' + humanScore + ', Computer: ' + computerScore);
}