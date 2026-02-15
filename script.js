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

