var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var letters = letter.toLowerCase();

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = [];

var winsElement = document.getElementById('wins');
var lossesElement = document.getElementById('losses');
var guessesLeftElement = document.getElementById('guessesLeft');
var guessesElement = document.getElementById('guesses');

document.onkeyup = function(event){
    var userGuess = event.key;
    var computerGuess = letter[Math.floor(Math.random() * letter.length)];
    
    if (userGuess == computerGuess){
        wins++;
    } else if (userGuess != computerGuess){
        guessesLeft--;
    } 
    console.log(computerGuess);

    winsElement.textContent = "Wins: " + wins;
    guessesLeftElement.textContent = "Guesses Left: " + guessesLeft;

} //end of key up function

