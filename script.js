function getComputerChoice() {
    const random_num = Math.random() * 100;
    const whole_num = Math.floor(random_num);


    if (whole_num < 50) {
        return 'Rock'

    } else if (whole_num > 50 && whole_num < 80) {
        return 'Paper'
    }

    else {
        return 'Scissors'
    }
}


console.log(getComputerChoice())