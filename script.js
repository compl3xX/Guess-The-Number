'use strict';
let SecretNum = Math.trunc(Math.random() * 20) + 1;



let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if (!guess) {
        document.querySelector('.message').textContent = '⚠ No Number......';
    } else if (guess === SecretNum) {

        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = SecretNum;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
    }
    else if (guess > SecretNum) {
        if (score > 1) {


            document.querySelector('.message').textContent = 'Too High';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost The game !!!!';
            document.querySelector('.score').textContent = 0;
        }

    }
    else if (guess < SecretNum) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '🔥You Lost The game !!!!';
            document.querySelector('.score').textContent = 0;
        }
    }
});
document.querySelector('.again').addEventListener('click', function () {
    SecretNum = Math.trunc(Math.random() * 20) + 1;

    score = 20;
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';





});