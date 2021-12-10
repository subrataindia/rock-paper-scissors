function computerPlay(){
    choices = ["Rock", "Paper", "Scissors"];
    let i = Math.trunc(Math.random()*choices.length);
    // Instead of Math.trunc() you can use ~~ also.
    return choices[i];
}

function getUserInput(){
    return prompt("Please Enter Your Choice?\n Rock Paper or Scissors","");
}

function playGame(x,y){
    console.log("Computer : "+x,"\nYou : "+y)
    if(x != null && y != null ){
        if(x.toLowerCase()===y.toLowerCase()){
        }else if((x.toLowerCase()==="paper" && y.toLowerCase()=="rock")
            || (x.toLowerCase()==="scissors" && y.toLowerCase()=="paper")
            || (x.toLowerCase()==="rock" && y.toLowerCase()=="scissors")
        ){
            computerScore++;;
        }else{
            userScore++;
        }
        console.log("Computer : "+computerScore,"User : "+userScore)
    }
}

function game(){
    playGame(x=computerPlay(), y=getUserInput())
    playGame(x=computerPlay(), y=getUserInput())
    playGame(x=computerPlay(), y=getUserInput())
    playGame(x=computerPlay(), y=getUserInput())
    playGame(x=computerPlay(), y=getUserInput())
    let result = calcResult(computerScore,userScore);
    console.log(computerScore,userScore, result)
}

function calcResult(computerScore,userScore){
    if(computerScore>userScore)
        return "Computer Wins"
    else if(computerScore<userScore)       
        return "User Wins"
    else        
        return "It's a Tie!"
    
}

let computerScore=0, userScore=0;

game();