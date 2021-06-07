//Function allowing the computer to make random selections
function computerPlay(){

    let gameOptions = ["rock","paper", "scissors"];
    let getRandom = Math.floor(Math.random()*gameOptions.length);
    if(getRandom===0){
        return "rock";
    }
    else if(getRandom===1){
        return "paper";
    }
    else if(getRandom===2){
        return "scissors";
    }
  
}

let playerScore = 0;
let computerScore = 0;

//Function playing a single round
function playRound (playerSelection,computerSelection){
    
    
    if( (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper"  && computerSelection === "rock") ||
        (playerSelection === "scissors"  && computerSelection === "paper"))
    {
        playerScore++
        alert(`you win this round, your score is ${playerScore} to ${computerScore}`);
    }
    
    else if((playerSelection === "rock"  && computerSelection === "rock") ||
            (playerSelection === "paper"  && computerSelection === "paper") ||
            (playerSelection === "scissors"  && computerSelection === "scissors"))
    {

        alert(`its a tie`);
    }
    
    else if((playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper"  && computerSelection === "scissors") ||
            (playerSelection === "scissors"  && computerSelection === "rock"))
    {
        computerScore++
        alert(`you loose this round, your score is ${playerScore} to ${computerScore}`);
    }
    else if((playerSelection !== "rock" && computerSelection !== "paper") ||
            (playerSelection !== "paper"  && computerSelection !== "scissors") ||
            (playerSelection !== "scissors"  && computerSelection !== "rock")){
        alert("please choose rock, paper or scissors, the score is 0 to 0");
    }

};

//Function playing 5 rounds of the game
function gamePlay(){
    playerSelection = prompt("Round 1: Rock? Paper? Scissors?");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    //Round 1
    playRound(playerSelection,computerSelection);

    playerSelection = prompt("Round 2: Rock? Paper? Scissors?");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    //round 2
    playRound(playerSelection,computerSelection);

    playerSelection = prompt("round 3: Rock? Paper? Scissors?");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    //round 3
    playRound(playerSelection,computerSelection);
    
    playerSelection = prompt("Round 4: Rock? Paper? Scissors?");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    //round 4
    playRound(playerSelection,computerSelection);

    playerSelection = prompt("Round 5: Rock? Paper? Scissors?");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    //round 5
    playRound(playerSelection,computerSelection);

if(playerScore > computerScore){
    alert("Congratulations, you win this game");
}
else if(playerScore < computerScore){
    alert("Ooppss! I'm sorry you have lost this game")
}
else if(playerScore === computerScore){
    alert("Fair play, Its a draw")
}
   
};
//Calling the function to beggin the game
gamePlay();


    




        


 