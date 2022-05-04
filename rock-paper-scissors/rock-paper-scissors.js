// you need to create selectors to update the scores and the moves being displayed
// you also need a selector for your move selection buttons
// you need a random selection function for your computer to pick a move each turn
// you need to update the display area to show your move for each turn
// you need a function for win/loss/tie scenarios
// you need an if/else if/else statement for each case of the game and to invoke the correct functions in each case

const rockSelector = document.getElementById('rock');
const paperSelector = document.getElementById('paper');
const scissorsSelector = document.getElementById('scissors');
const humanScore = document.getElementById('human-score');
const compScore = document.getElementById('comp-score');
const rockHuman = document.getElementById('rock-input-human');
const paperHuman = document.getElementById('paper-input-human');
const scissorsHuman = document.getElementById('scissors-input-human');
const rockComp = document.getElementById('rock-input-comp');
const paperComp = document.getElementById('paper-input-comp');
const scissorsComp = document.getElementById('scissors-input-comp');
const round = document.getElementById('round')

function play (humanInput){
    let num = Math.floor(Math.random()*3);
    let options = ['rock', 'paper', 'scissors'];
    let compInput = options[num];
    if (compInput === 'rock'){
        rockComp.style.display = 'block'
        paperComp.style.display = 'none'
        scissorsComp.style.display = 'none'
    } else if (compInput === 'paper'){
        rockComp.style.display = 'none'
        paperComp.style.display = 'block'
        scissorsComp.style.display = 'none'
    } else if(compInput === 'scissors'){
        rockComp.style.display = 'none'
        paperComp.style.display = 'none'
        scissorsComp.style.display = 'block'
    }
    if (humanInput == 'rock' && compInput == 'scissors' ||
     humanInput == 'paper' && compInput == 'rock' ||
     humanInput == 'scissors' && compInput == 'paper'){
         human++;
         humanScore.innerHTML = `${human}`
         round.innerHTML = `You Win!`

    }else if (humanInput === compInput){
        round.innerHTML = `This round is a tie!`

    }
     else {
        comp++;
        compScore.innerHTML = `${comp}`
        round.innerHTML = `You Lose!`
    }
}
let human = 0;
let comp = 0;

//eventlisteners
rockSelector.addEventListener('click', function(){
    rockHuman.style.display = 'block';
    paperHuman.style.display = 'none';
    scissorsHuman.style.display = 'none';
    play('rock');
});
paperSelector.addEventListener('click', function(){
    rockHuman.style.display = 'none';
    paperHuman.style.display = 'block';
    scissorsHuman.style.display = 'none';
    play('paper');
});
scissorsSelector.addEventListener('click', function(){
    rockHuman.style.display = 'none';
    paperHuman.style.display = 'none';
    scissorsHuman.style.display = 'block';
    play('scissors');
});

//functions


