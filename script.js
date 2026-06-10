// Below is the getComputerChoice Function. Is basically chooses rock, paper
// or scissors. It does that by using the Math.random function. 
// I divided the random variables of 99 by three, and put an IF statement to assign
// the numbers either rock, paper or scissors. 
function getComputerChoice(){
    let number = Math.floor(Math.random() * 100); // Reason I *100 cause math.random returns 0.*** numbers
    let tool;
    if (number < 33){   
        tool = "rock";
    } else if (number < 66){
        tool = "paper";
    } else {
        tool = "scissors";
    }
    return tool;
    console.log(number);
}
// console.log(getComputerChoice())


// In this function I use a prompt function 
// to ask the choice of the user and it is then printed in console.
function getHumanChoice(){
    let choice = prompt("What is your choice?");
    return choice.toLowerCase();
}
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



function playRound(humanSelection, computerSelection){
        // rock
    if (humanSelection === "rock" && computerSelection === "paper"){
        console.log("Computer WON!");
        computerScore += 1;
    } else if (humanSelection === "rock" && computerSelection === "scissors"){
        console.log("You WON!");
        humanScore += 1;
        //paper
    } else if (humanSelection === "paper" && computerSelection === "rock"){
        console.log("You WON!");
        humanScore += 1;
    } else if (humanSelection === "paper" && computerSelection === "scissors"){
        console.log("Computer WON!");
        computerScore += 1;
        //scissors
    } else if (humanSelection === "scissors" && computerSelection === "rock"){
        console.log("Computer WON!");
        computerScore += 1;
    } else if (humanSelection === "scissors" && computerSelection === "paper"){
        console.log("You WON!");
        humanScore += 1;
    } else {
        console.log("TIE!")
    }
}


console.log(`Human: ${humanSelection} | Computer: ${computerSelection}`);
playRound(humanSelection,computerSelection);
console.log(`Human: ${humanScore} | Computer: ${computerScore}`);