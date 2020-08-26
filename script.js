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

  function playRound(playerChoice, computerChoice){
  
    // playerChoice = prompt('Choose rock, paper or scissors!');
    playerChoice = playerChoice.toLowerCase();
   
    let winner;
    
      //check for tie
      if(playerChoice === computerChoice){
        // prompt('Tie! Choose rock, paper or scissors again.')
      }
  
      //check for rock
      else if(playerChoice === 'rock'){
        if(computerChoice === 'paper'){
        console.log('You lose! Paper covers rock.')
         winner = 'computer'
  
        }
        if(computerChoice === 'scissors'){
        console.log('You win! Rock crushes scissors.')
         winner = 'player'
       
        }
      }
      //check for paper
      else if(playerChoice === 'paper'){
        if(computerChoice === 'scissors'){
        console.log('You lose! Scissors cut paper.')
          winner = 'computer'
   
          
        }
        if(computerChoice === 'rock'){
        console.log('You win! Paper covers rock.')
          winner = 'player'
      
        }
      }
      //check for scissors
      else if(playerChoice === 'scissors'){
       if(computerChoice === 'rock'){
        console.log('You lose! Rock crushes scissors.')
         winner = 'computer'
        
        }
       if(computerChoice === 'paper'){
        console.log('You win! Scissors cut paper.')
         winner = 'player'
      
        }
  
     }   
    
    if (winner === 'computer') return [winner, `You lose! ${computerChoice} beats ${playerChoice}!`]
      else return [winner, `You win! ${playerChoice} beats ${computerChoice}!`]
    
  }
  
  let playerChoice = 'rock';
  let computerChoice = computerPlay();
  
  console.log(playRound(playerChoice, computerChoice));
  
  
function game(numOfRounds){
  
  let playerPoints = 0;
  let computerPoints = 0;
  
     
       for (let i=0; i<numOfRounds; i++) {
         
         let player = 'rock';
         let computer = computerPlay()
         
         let outcome = playRound(player, computer)
         console.log(outcome)
         if (outcome[0] === 'computer') computerPoints++
         else playerPoints++
     }
     console.log(playerPoints, computerPoints)
   
       if (playerPoints > computerPoints) return `You are victorious! Final score: ${playerPoints} vs ${computerPoints}`
       else return `You have fallen to your enemy! Final score: ${computerPoints} vs ${playerPoints}`
 }
 
 console.log(game(5));