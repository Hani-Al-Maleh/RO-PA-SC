let humanScore = 0
let computerScore = 0
let roundsCounter = 5



function getComputerChoice() {
    const random_num = Math.random() * 100;
    const whole_num = Math.floor(random_num);


    if (whole_num < 35) {
        return 'rock'

    } else if (whole_num > 35 && whole_num < 65) {
        return 'paper'
    }

    else {
        return 'scissors'
    }
}


function getHumanChoice() {
    const userChoice = prompt('what is your choice? Rock , Paper, or Scissors')
    const insensitiveInput = userChoice.toLocaleLowerCase()
    return insensitiveInput
}


function playRound(humanChoice, ComputerChoice) {
    if (humanChoice == 'rock' && ComputerChoice == 'scissors') {
        console.log('You Win! rock beats scissors')
        humanScore++
        return

    } else if (humanChoice == 'rock' && ComputerChoice == 'paper') {
        console.log('You lose! paper beats rock')
        computerScore++
        return
    }
    else if (humanChoice == 'paper' && ComputerChoice == 'scissors') {
        console.log('You lose! scissors beat paper')
        computerScore++
        return
    }
    else if (humanChoice == 'paper' && ComputerChoice == 'rock') {
        console.log('You win! paper beat rock')
        humanScore++
        return
    }
    else if (humanChoice == 'scissors' && ComputerChoice == 'rock') {
        console.log('You lose! rock beat scissors')
        computerScore++
    }

    else if (humanChoice == 'scissors' && ComputerChoice == 'paper') {
        console.log('You win! scissors beat paper')
        humanScore++
        return
    }

    else if (humanChoice == ComputerChoice) {
        console.log('it\'s draw')
        return
    }



}

function playGame() {
    while (roundsCounter > 0) {
        const computer = getComputerChoice();
        const human = getHumanChoice();
        roundsCounter--;
        playRound(human, computer)

    }

    console.log(humanScore, 'Your score')
    console.log(computerScore, 'com-score')

}





playGame()