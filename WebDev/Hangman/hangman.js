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

document.addEventListener("DOMContentLoaded", function(){
    const start = document.getElementById('start');
    const guessEnter = document.getElementById('letterGuess');
    const guessSubmit = document.getElementById('submitGuess');
    const word = document.getElementById('wordField');
    const newGame = new hangMan();
    const letter = guessEnter.value;

    start.addEventListener("click", function(){
        start.style.display = "none";
        guessEnter.removeAttribute("hidden");
        guessSubmit.removeAttribute("hidden");
        word.removeAttribute("hidden")
        newGame.initalizeGame();
        word.innerHTML = newGame.hiddenWord;
    })

    //User submits their answer
    guessSubmit.addEventListener("click",function() {
        console.log(letter);
        newGame.checkGuess(letter);
    });
    guessEnter.addEventListener("keypress",function(event){
        if (event.key === "Enter"){
            console.log(letter);
            event.preventDefault();
            newGame.checkGuess(letter);
        } 
    });

    
})

class hangMan{
    //Generate a random number
    //Get the word from the array
    //Hide unguessed letters

    //ask user for a guess
    //check if guess exist in the word
    //reveal any instance of the letter
    //else decrement lives


    constructor(currWord, lives, gameStatus) {
        /*
        Define the variables for the objects created by this class.
        */
        this.currWord = currWord;
        this.hiddenWord = this.hiddenWord
        this.wordArr = ['Apple', 'Sunshine', 'Bicycle', 'Ocean', 'Chocolate', 'Adventure', 'Music', 'Moonlight', 'Serendipity', 'Rainbows'];
        this.lives = lives;
        this.gameStatus = gameStatus
    }

    initalizeGame(gameStatus = 'Alive', lives = 5, currWord =this.getWord()){
        console.log("Game Start");
        this.getWord();
    }

    getWord(){
        /*
        Generate an random number and use the number to access an index.
        */
        const min = 0
        const max = this.wordArr.length-1;
        let randIndex = Math.floor(Math.random() * (max - min) + min);
        this.currWord = this.wordArr[randIndex];
        this.hiddenWord = this.hideWord(this.currWord)
    }

    hideWord(wordToGuess){
        /*
        hide all letters, only called at beggining of game
        */
        let hiddenWord = '';

        for (let index = 0; index < wordToGuess.length; index++) {
            const element = wordToGuess[index];
            hiddenWord += '-'
        }
    
        return hiddenWord
    }

    decemenetLife(params) {
        
    }

    collectGuess(params) {        
    }

    checkGuess(params) {
                // check if letter is in word

            // if true
                // reveal all instances of the letter
            //else
                // add piece of hangedman
        console.log("Checking letter");
    }
}





