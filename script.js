function computerPlay(){

    let computerChoice = Math.random();
  
    if(computerChoice < .34){
    computerChoice = 'rock';
    }
    else if(computerChoice <= .667){
    computerChoice = 'paper';
    }
    else{
    computerChoice = 'scissors';
    }
    return computerChoice;
  }
  console.log(computerPlay());