var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var letters = letter.toLowerCase();

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = '';

var winsElement = document.getElementById('wins');
var lossesElement = document.getElementById('losses');
var guessesLeftElement = document.getElementById('guessesLeft');
var guessesElement = document.getElementById('guesses');

document.onkeyup = function(event){
    var userGuess = event.key;
    var computerGuess = letter[Math.floor(Math.random() * letter.length)];
    
    if (userGuess == computerGuess){
        wins++;
        guessesLeft = 10;
    } else if (userGuess != computerGuess){
        guessesLeft--;  
   if (guessesLeft < 1){
        losses++;
        guessesLeft = 10;
   };
}
    
    //how do i see that the user did not choose a valid letter (like a number or other character)

    //how do i append the numbers guessed already next to each other

    //how do i implement toLowerCase to this program
    winsElement.textContent = "Wins: " + wins;
    guessesLeftElement.textContent = "Guesses Left: " + guessesLeft;
    guessesElement.textContent = "Guesses: " + userGuess;
    lossesElement.textContent = "Losses: " + losses;
} ;//end of key up function

