// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessField').value);
    const message = document.getElementById('message');

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    guesses++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${guesses} guesses!`;
        disableInput();
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
    } else {
        message.textContent = 'Too high! Try again.';
    }
}

function resetGame() {
    guesses = 0;
    document.getElementById('guessField').value = '';
    document.getElementById('message').textContent = '';
    randomNumber = Math.floor(Math.random() * 100) + 1;
    enableInput();
}

function disableInput() {
    document.getElementById('guessField').disabled = true;
    document.querySelector('button').disabled = true;
}

function enableInput() {
    document.getElementById('guessField').disabled = false;
    document.querySelector('button').disabled = false;
}
