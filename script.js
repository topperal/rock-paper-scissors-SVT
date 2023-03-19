function getComputerChoice() {
    let n = Math.floor(Math.random()*10) + 1;
    if (n%2===0 && n%3===0) {
        computerChoice = 'Paper';
    }
    else if (n%5===0) {
        computerChoice = 'Rock';
    }
    else {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}

function getUserChoice(clicked_id) {
    alert(clicked_id);
    userChoice = document.getElementById(clicked_id).innerHTML;
    return userChoice;
}

let computerChoice = getComputerChoice();

function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        alert('Tie');
    }
    else if (userChoice === 'Rock') {
        if (computerChoice === 'Paper') {
            alert(`You lose! You choose ${userChoice} against ${computerChoice}`);
        }
        else {
            alert(`You win! You choose ${userChoice} against ${computerChoice}`);
        }
    }
    else if (userChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            alert(`You win! You choose ${userChoice} against ${computerChoice}`);
        }
        else {
            alert(`You lose! You choose ${userChoice} against ${computerChoice}`);
        }
    }
    else {
        if (computerChoice === 'Rock') {
            alert(`You lose! You choose ${userChoice} against ${computerChoice}`);
        }
        else {
            alert(`You win! You choose ${userChoice} against ${computerChoice}`);
        }
    }
}



