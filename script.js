let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
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



// //let computerChoice = getComputerChoice();
// //let userChoice;

// let playerScore = 0;
// let computeScore = 0;
// const buttons = document.querySelectorAll('input');

// function disableButtons() {
//     buttons.forEach(element => {
//         element.disabled = true;
//     })
// }

// function getComputerChoice() {
//     let n = Math.floor(Math.random()*10) + 1;
//     if (n%2===0 && n%3===0) {
//         computerChoice = 'Paper';
//     }
//     else if (n%5===0) {
//         computerChoice = 'Rock';
//     }
//     else {
//         computerChoice = 'Scissors';
//     }
//     return computerChoice;
// }
// let userChoice = "";
// function getUserChoice(clicked_id) {
//     alert(clicked_id);
//     userChoice = document.getElementById(clicked_id).innerHTML;
//     return userChoice;
// }

// function playRound(userChoice) {
//     let computerChoice = getComputerChoice();
//     let result = "";
//     if (userChoice === computerChoice) {
//         result = 'Tie';
//     }
//     else if (userChoice === 'Rock') {
//         if (computerChoice === 'Paper') {
//             result = `You lose! You choose ${userChoice} against ${computerChoice}`;
//             computeScore++;
//         }
//         else {
//             result = `You win! You choose ${userChoice} against ${computerChoice}`;
//             playerScore++;
//         }
//     }
//     else if (userChoice === 'Paper') {
//         if (computerChoice === 'Rock') {
//             result = `You win! You choose ${userChoice} against ${computerChoice}`;
//             playerScore++;
//         }
//         else {
//             result = `You lose! You choose ${userChoice} against ${computerChoice}`;
//             computeScore++;
//         }
//     }
//     else {
//         if (computerChoice === 'Rock') {
//             result = `You lose! You choose ${userChoice} against ${computerChoice}`;
//             computeScore++;
//         }
//         else {
//             result = `You win! You choose ${userChoice} against ${computerChoice}`;
//             playerScore++;
//         }
//     }
//     document.getElementById('result').innerHTML = result;
//     return;
// }

// buttons.forEach(button => {
//     button.addEventListener('clicl', function(){
//         playRound(button.value)
//     })
// })

// // function game() {
// //     for (let i = 0; i < 5; i++) {
// //         let computerChoice = getComputerChoice();
// //         playRound(userChoice,computerChoice);
// //     }
// // }



