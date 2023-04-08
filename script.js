let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')
const btn_new_game = document.getElementById('new_game');
btn_new_game.disabled = true;

function computerPlay() {
    let n = Math.floor(Math.random()*10) + 1;
    if (n%2===0 && n%3===0) {
        computerChoice = 'paper';
    }
    else if (n%5===0) {
        computerChoice = 'rock';
    }
    else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
        btn_new_game.disabled = false;
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        result = `You win! You choose ${playerSelection} against ${computerSelection}` + `<br><br>Player score: ` + playerScore + `<br>Computer score: ` + computerScore+ ' ';
        playerScore++;

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again' + ' ';
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = 'It\'s a tie. You both chose ' + playerSelection
            + '<br><br>Player score: ' + playerScore + '<br>Computer score: ' + computerScore + ' ';
    }
    else {
        result = `You lose! You choose ${playerSelection} against ${computerSelection}`  + `<br><br>Player score: ` + playerScore + `<br>Computer score: ` + computerScore + ' ';
        computerScore++;
        if (computerScore == 5) {
            result += '<br><br>I won the game! Reload the page to play again' + ' ';
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
