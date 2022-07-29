
function play(){
    let userChoice = prompt("Please select Rock, Paper, Scissors").toLowerCase();
    let myArray = ["Rock", "Paper", "Scissors"];
    var computerChoice = myArray[Math.floor(Math.random()*myArray.length)]; 
    
    if(userChoice == "rock" && computerChoice == "Scissors"){
        console.log("The computer played " + computerChoice+ ". You won")
    
    }else if (userChoice == "rock" && computerChoice == "Rock") {
            console.log("The computer played " + computerChoice+ ". You Tied")
    
    } else if (userChoice == "rock" && computerChoice == "Paper") {
        console.log("The computer played " + computerChoice+ ". You Lost")
    
    }else if(userChoice == "paper"  && computerChoice == "Rock"){
        console.log("The computer played " + computerChoice+ ". You won")
    
    } else if (userChoice == "paper" && computerChoice == "Paper") {
            console.log("The computer played " + computerChoice+ ". You Tied")
    
    }else if (userChoice == "paper" && computerChoice == "Scissors") {
        console.log("The computer played " + computerChoice+ ". You Lost")
    
    }else if(userChoice == "scissors" && computerChoice == "Paper"){
        console.log("The computer played " + computerChoice+ ". You won")
    
    }else if (userChoice == "scissors" && computerChoice == "Scissors") {
        console.log("The computer played " + computerChoice+ ". You Tied")
    
    }else if (userChoice == "scissors" && computerChoice == "Rock") {
            console.log("The computer played " + computerChoice+ ". You Lost") 
    }
}

for (let i = 0; i < 5; i++) {
    play();
 }

