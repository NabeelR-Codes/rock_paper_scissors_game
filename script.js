// Below is the getComputerChoice Function. Is basically chooses rock, paper
// or scissors. It does that by using the Math.random function. 
// I divided the random variables of 99 by three, and put an IF statement to assign
// the numbers either rock, paper or scissors. 
function getComputerChoice(){
    let number = Math.floor(Math.random() * 100); // Reason I *100 cause math.random returns 0.*** numbers
    let tool;
    if (number < 33){   
        tool = "Rock";
    } else if (number < 66){
        tool = "Paper";
    } else {
        tool = "Scissors";
    }
    return tool;
}
console.log(getComputerChoice());


