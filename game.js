// declare varibales

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var guessesLeft = 9;
var wins = 0;
var losses = 0;
var letterGuessed = [];
var letterToGuess = 0;
var guessedLetters = [];

// make the computer generate a random letter

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Allows the user 9 guesses
// guesses = guesses || 9

var updateGuessesLeft = function() {
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

// Creating function to make the computer pick a random lettter

var updateLetterToGuess = function() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

// Creating function to display letters guessed to the screen

var updateGuessesSoFar = function () {
    document.querySelector("#letterGuesses").innerHTML = "Your Guesses so far: " + guessedLetters.join(", ");
};

// Creating function to reset game once player has lost or won

var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

// when key is released it becomes the users guess
document.onkeyup = function(event) {
    guessesLeft--;
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

guessedLetters.push(userGuess);
updateGuessesLeft();
updateGuessesSoFar();

    if (guessesLeft > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            document.querySelector("#winTotal").innerHTML = "Wins: " + wins;
            alert("Yes it is " + letterToGuess + ", you are psychic!");
            reset();
        }
    }else if(guessesLeft == 0) {
        losses++;
        document.querySelector("#lossTotal").innerHTML = "Losses: " + losses;
        alert("Sorry, you're not psychic, maybe try again?");
        reset();
    }
};