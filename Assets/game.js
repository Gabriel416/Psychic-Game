//Letters computer can choose from
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//tracking
var attempts = [];
var guessesLeft = 10;
var wins = 0;
var losses = 0;

alert("Refresh your page everytime you win to play again");


//First assign letter and store it in console
var computerChoice = letters[Math.floor(Math.random() * letters.length)];
console.log(computerChoice);





//Whenever the user presses a key, trigger the following sequence of events.

document.onkeypress = function(event) {
    var userGuess = event.key;



    if (userGuess === computerChoice) {
        wins = 0;
        wins++;
        attempts = [];
        guessesLeft = 10;
        losses = 0;
    } else {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 10;
    }
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
}




document.onkeydown = function(trigger) {
    attempts.push(trigger.key);


    var attemptsText = "Your guesses so far: " + attempts;


    document.getElementById('attempts').innerHTML =  attemptsText;
}


