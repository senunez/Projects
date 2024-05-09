"use strict";
// //Load HTTP module
// const http = require("http");
// const hostname = "127.0.0.1";
// const port = 3000;

// //Create HTTP server and listen on port 3000 for requests
// const server = http.createServer((req, res) => {
//   //Set the response HTTP header with HTTP status and Content type
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World\n");
// });

// //listen for request on port 3000, and as a callback function have the port listened on logged
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


class hangMan{
    
    constructor(gameWord) {
        this.gameWord = gameWord
    }

    getWord(){
        // get random number
        // get word at index

        let randIndex = Math.random() * (max - min) + min;
    }

    collectGuess(params) {        
    }

    checkGuess(params) {
                // check if letter is in word

            // if true
                // reveal all instances of the letter
            //else
                // add piece of hangedman 
    }
}

// let newGame = new hangMan();
// newGame.getWord(25)

const wordArr = ['Apple', 'Sunshine', 'Bicycle', 'Ocean', 'Chocolate', 'Adventure', 'Music', 'Moonlight', 'Serendipity', 'Rainbows']

function getWord(){
    // get random number
    // get word at index
    const min = 0;
    const max = wordArr.length;
    let randIndex = Math.floor(Math.random() * (max - min) + min);

    return wordArr[randIndex];
}

function hideWord(wordToGuess){
    // let wordToGuess = getWord();
    let hiddenWord = '';
    // console.log(wordToGuess.length);
    for (let index = 0; index < wordToGuess.length; index++) {
        const element = wordToGuess[index];
        // if letter is revealed, append letter
        //else hide letter
        hiddenWord += '_'
    }

    return hiddenWord
}

function checkLetter(guess, word, hiddenWord){
    for (let index = 0; index < word.length; index++) {
        if (word[index] === guess){
            return hiddenWord[index] = guess
        }else{
            return false
        }
    }
}

function guessWord() {
    let word = getWord();
    let hiddenWord = hideWord(word)
    let lives = 6;
    let lettersLeft = word.length;
    let currLetter = ''
    console.log(word)
    console.log(hiddenWord)
    console.log(lettersLeft)
    //while lives > 0 || while hidden > 0
    // ask the user to provide a letter
    // check if the letter has been guessed
    // if te letter hasn't been guessed, check if the letter is in the string
    // if the letter is in the string, reveal all instances of the letter
    // elif the letter is not in the string decrement the lives variables

    while (currLetter.length !== 1){
        currLetter = prompt("Provide a single letter:")
    }

    if (checkLetter(currLetter, word, hiddenWord) = false){

    }else{
        hiddenWord = 
    }
    // keep the hidden work in an array
    // check each letter in word while tracking the current pos
    //if currLetter matches word[pos], jump to


}

// let hiddenWord = hideWord();
// console.log(hideWord());
guessWord();
