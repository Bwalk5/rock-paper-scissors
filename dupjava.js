let myArray = ["rock", "paper", "scissors"];
// const computerChoice = computerOptions();
// const playerChoice = playerSelection();


function computerOptions() {   
    var choices = myArray[Math.floor(Math.random()*myArray.length)];
    return choices.toLowerCase();
}

function playRound(playerChoice, computerChoice){
    if((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")){
    console.log("You Won")
    }
   
    else if(playerChoice == computerChoice){
        console.log("You Tied")
    }
    else
    console.log("You Lost") 
}

function playerSelection(){
    let input = prompt("Type Rock, Paper, or Scissors!")
    while (input == null){
        input = prompt("Type Rock, Paper, or Scissors!")
    }
    input = input.toLowerCase()

    let check = validateInput(input);
    while (check == false){
        input = prompt("Type Rock, Paper, or Scissors! Spelling matters. Capitalization does Notification.")
        
        while (input == null){
            input = prompt("Type Rock, Paper, or Scissors!")
        }

        input = input.toLowerCase()
        check = validateInput(input)
    }

    return input
    }
    


function validateInput(choice){
    return myArray.includes(choice);

}


for (let i = 1; i <= 5; i++) {
    const computerChoice = computerOptions();
    const playerChoice = playerSelection();
    playRound(playerChoice, computerChoice) 
    console.log("The computer chose: " + computerChoice)
    console.log("You chose: " + playerChoice)
    console.log("-----------------------")
 }