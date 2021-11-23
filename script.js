'use strict';
let SecretNum = Math.trunc(Math.random() * 20) + 1;



let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const numBer = document.querySelector('.number');
const scoRe = document.querySelector('.score');


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if (!guess) {
        displayMessage('⚠ No Number......');
    } else if (guess === SecretNum) {

        displayMessage('Correct Number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        numBer.style.width = '30rem';
        numBer.textContent = SecretNum;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    else {
        if (score > 1) {


            displayMessage(guess > SecretNum ? 'Too High' : 'Too low');
            score--;
            scoRe.textContent = score;
        } else {
            displayMessage('You Lost The game !!!!');
            scoRe.textContent = 0;
        }

    }
    // else if (guess > SecretNum) {
    //     if (score > 1) {


    //         document.querySelector('.message').textContent = 'Too High';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You Lost The game !!!!';
    //         document.querySelector('.score').textContent = 0;
    //     }

    // }
    // else if (guess < SecretNum) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too Low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = '🔥You Lost The game !!!!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});
document.querySelector('.again').addEventListener('click', function () {
    SecretNum = Math.trunc(Math.random() * 20) + 1;

    score = 20;
    scoRe.textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    numBer.textContent = '?';
    document.querySelector('.guess').value = '';
    numBer.style.width = '15rem';
    displayMessage('Start guessing...');





});