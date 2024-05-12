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
    let letter
    let revealed
    const start = document.getElementById('start');
    const guessEnter = document.getElementById('letterGuess');
    const guessSubmit = document.getElementById('submitGuess');
    const word = document.getElementById('wordField');
    const newGame = new hangMan(revealed);




    // User starts the game
    start.addEventListener("click", function(){
        start.style.display = "none";
        guessEnter.removeAttribute("hidden");
        guessSubmit.removeAttribute("hidden");
        word.removeAttribute("hidden")
        revealed = newGame.initalizeGame();
        word.innerHTML = newGame.hiddenWord;
    })

    //User submits their answer with submit button
    guessSubmit.addEventListener("click",function() {
        letter = document.getElementById('letterGuess').value;
        revealed = newGame.checkGuess(letter, revealed);
        word.innerHTML = revealed
        
    });

    //User Uses the Enter key
    // guessEnter.addEventListener("keypress",function(event){
    //     letter = document.getElementById('letterGuess').value;
    //     if (event.key === "Enter"){
    //         event.preventDefault();
    //         newGame.checkGuess(letter);
    //     } 
    // });

    
})

class hangMan{
    //Generate a random number
    //Get the word from the array
    //Hide unguessed letters
    //ask user for a guess
    
    //check if guess exist in the word
    //reveal any instance of the letter
    //else decrement lives


    constructor(currWord, lives, gameStatus, hiddenWord) {
        /*
        Define the variables for the objects created by this class.
        */
        this.currWord = currWord;
        this.hiddenWord = hiddenWord;
        this.wordArr = ['Apple', 'Sunshine', 'Bicycle', 'Ocean', 'Chocolate', 'Adventure', 'Music', 'Moonlight', 'Serendipity', 'Rainbows'];
        this.lives = lives;
        this.gameStatus = gameStatus
    }

    initalizeGame(currWord =this.getWord(), gameStatus = 'Alive', lives = 5, ){
        console.log("Game Start");
        this.lives = lives;
        return this.getWord();
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
        return this.hiddenWord
    }

    hideWord(currWord){
        /*
        hide all letters, only called at beggining of game
        */

        // for (const pos in currWord) {
        //         this.hiddenWord = '-';
        //     }
        let modString = ''
        for (const key in currWord) {
            modString = modString + '-';
        }
        this.hiddenWord = modString;
        return this.hiddenWord;
    }

    decLife() {
        this.lives -= 1;
    }

    collectGuess(params) {        
    }

    checkGuess(letter, revealed) {


        let modString = ''
        console.log(this.currWord);
        console.log(revealed)

        for (let index = 0; index < this.currWord.length; index++) {
            console.log(this.hiddenWord);
            if (letter === this.currWord[index]) {
                modString += letter;
            }else if (this.currWord[index] === revealed[index]) {
                console.log("reveladed letter")
                modString += revealed[index];
            }else{
                modString += '-';
            }
            this.hiddenWord = modString
        }

        

        return this.hiddenWord;

        // console.log(this.hiddenWord);
        // if (matchesCount.length == 0) {
        //     // decemement life
        //     this.decLife()
        // }
    }
}





