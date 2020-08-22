/* Solve the game "Guess a number", find a secret integer between 1 and 1000000 in less than 50 guesses. Write a function that solves the game without user input and returns the solution by using the function verify() which is defined with a following specification:
function verify(guess: integer) -> integer
argument: guess (integer) -> the number to verify
returns: 0 if the guess is the solution, your program won
         1 if the solution is > than the guess parameter
        -1 if the solution is < than the guess parameter */

// transcoded to JavaScript by Nicesoul https://github.com/nicesoul
// from a Python version https://github.com/mjarmak/guess_a_number      Thanks, mate :)

function verify (int1, int2){
    if      (int1 > int2)  output = 1;
    else if (int1 < int2)  output = -1;
    else                   output = 0;
    return output;
}
const maxNumber = 1000000;  //choose any positive Integer you like ^_^
const maxNumberOfGuesses = 50; //20 guesses is enough for a million
const secretNumber = Math.ceil(Math.random() * maxNumber); // Integer from 0 to maxNumber
console.log(`Number to guess = ${secretNumber}`);

function check (secretNumber) {
    let guess = maxNumber / 2;
    let temp = guess;
    let guessCount = 1;
    while (guessCount <= maxNumberOfGuesses) {
        temp = Math.ceil(temp / 2); // this is a secret solution
        verify (guess, secretNumber);
        console.log(`guess # ${guessCount}`);
        if (output == 1){
            console.log(`Return is ${output}, guessed number is ${guess}`);
            guess = guess - temp;}
        else if (output == -1){
            console.log(`Return is ${output}, guessed number is ${guess}`);
            guess = guess + temp;}
        else if (output == 0) {
            console.log(`Return is 0, number ${guess} is found in ${guessCount} guesses`);
        break}
        guessCount++;
    }
}

check(secretNumber);