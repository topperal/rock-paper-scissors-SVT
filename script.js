let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')
// const btn_new_game = document.getElementById('new_game');
// btn_new_game.disabled = true;

const resultPopup = document.getElementById('resultPopup');
const popupMessage = document.getElementById('popupMessage');
const newGameBtn = document.getElementById('newGameBtn');

function showPopup(message) {
  popupMessage.textContent = message;
  resultPopup.style.display = 'block';
  if (message === 'Congratulations! You won the game!') {
    // Вызываем функцию для создания эффекта конфетти
    createConfetti();
  }
}

function hidePopup() {
  resultPopup.style.display = 'none';
}

function computerPlay() {
    let n = Math.floor(Math.random()*10) + 1;
    if (n%2===0 && n%3===0) {
        computerChoice = 'palranghae';
    }
    else if (n%5===0) {
        computerChoice = 'wooahae';
    }
    else {
        computerChoice = 'horanghae';
    }
    return computerChoice;
}

function enableButtons() {
    buttons.forEach(elem => {
      elem.disabled = false;
    });
  }

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    // Удаляем предыдущую картинку перед добавлением новой
    let compChoiceContainer = document.getElementById('comp-choice');
    while (compChoiceContainer.firstChild) {
        compChoiceContainer.removeChild(compChoiceContainer.firstChild);
    }

    // Создаем новый элемент с картинкой
    var div = document.createElement('div');
    var image = document.createElement('img');

    // В зависимости от выбора компьютера устанавливаем нужную картинку
    if (computerSelection === 'palranghae') {
        image.setAttribute('src', "../rock-paper-scissors-SVT/images/frog.svg");
    } else if (computerSelection === 'wooahae') {
        image.setAttribute('src', "../rock-paper-scissors-SVT/images/rice.svg");
    } else {
        image.setAttribute('src', "../rock-paper-scissors-SVT/images/tiger.svg");
    }

    div.appendChild(image);
    document.getElementById('comp-choice').appendChild(div);

    if ((playerSelection == 'palranghae' && computerSelection == 'wooahae') ||
        (playerSelection == 'wooahae' && computerSelection == 'horanghae') ||
        (playerSelection == 'horanghae' && computerSelection == 'palranghae')) {
        
        playerScore++;
        // result = `You win! You choose ${playerSelection} against ${computerSelection}` + `<br><br>Player score: ` + playerScore + `<br>Computer score: ` + computerScore+ ' ';
        result = `<span style="font-size: 128px; line-height: 1;">${playerScore}:${computerScore}</span>`;

        if (playerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            result = `<span style="font-size: 128px; line-height: 1;">${playerScore}:${computerScore}</span>`;
            // result += '<br><br>You won the game! Reload the page to play again' + ' ';
            // disableButtons()
            showPopup('Congratulations! You won the game!');
            enableButtons();
            
        }
    }
    else if (playerSelection == computerSelection) {
        result = `<span style="font-size: 128px; line-height: 1;">${playerScore}:${computerScore}</span>` + `<br><br>` + `<span style="font-size: 32px; line-height: 1;">It\'s a tie!</span>`;
        // result = 'It\'s a tie. You both chose ' + playerSelection
        //     + '<br><br>Player score: ' + playerScore + '<br>Computer score: ' + computerScore + ' ';
    }
    else {
        computerScore++;
        // result = `You lose! You choose ${playerSelection} against ${computerSelection}`  + `<br><br>Player score: ` + playerScore + `<br>Computer score: ` + computerScore + ' ';
        result = `<span style="font-size: 128px; line-height: 1;">${playerScore}:${computerScore}</span>`;
        if (computerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            result = `<span style="font-size: 128px; line-height: 1;">${playerScore}:${computerScore}</span>`;
            showPopup('Sorry, you lost the game. Better luck next time!');
            enableButtons();
            
            // result += '<br><br>You lose the game! Reload the page to play again' + ' ';
            // disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result

    return
}

newGameBtn.addEventListener('click', function() {
    playerScore = 0;
    computerScore = 0;
    hidePopup();
    enableButtons();
  });

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.id)
    })
})



function createConfetti() {
    const confettiSettings = {
      target: 'confetti', // ID элемента, где будет создан эффект конфетти
      max: 80,
      size: 2,
      animate: true,
      props: ['circle', 'square', 'triangle', 'line'],
      colors: [[255, 255, 255], [255, 0, 0], [0, 255, 0], [0, 0, 255]], // Цвета конфетти
      clock: 25,
      rotate: true,
      start_from_edge: false,
      respawn: true,
    };
  
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  }