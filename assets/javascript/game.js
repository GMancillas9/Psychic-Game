


// Here we create the array that identifies the options for the computer. 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Creating variables to hold the number of wins, losses, and ties. They start at 0.  
var numWinsCounter = 0;
var numLossesCounter = 0;
var numGuessesCounter = 9;
var typedGuesses = [];
var userGuess;


// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("This is the computer Guess", computerGuess);

// This is a function that registers the User's Guess. 
document.onkeyup = function (event) {
    userGuess = event.key;
    console.log(userGuess);


    // Conditional Statments Below: 
    if (userGuess === computerGuess) {
        numWinsCounter++;
        numGuessesCounter = 9;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("computerGuess2", computerGuess)
    }

    else {
        numGuessesCounter--;
        typedGuesses.push(userGuess);
    }

    if (numGuessesCounter === 0) {
        numLossesCounter++;
        typedGuesses = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        numGuessesCounter = 9;
    }


    // Display the user and computer guesses, and wins/losses/ties.
    document.getElementById("numWins").innerHTML = numWinsCounter;
    document.getElementById("numLosses").innerHTML = numLossesCounter;
    // document.getElementById("numGuesses").innerHTML = numGuessesCounter; 
    document.getElementById("typedGuesses").innerHTML = typedGuesses;


}

