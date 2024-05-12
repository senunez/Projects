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
    let lives = document.getElementById('lives');
    const newGame = new hangMan();




    // User starts the game
    start.addEventListener("click", function(){
        start.style.display = "none";
        guessEnter.removeAttribute("hidden");
        guessSubmit.removeAttribute("hidden");
        lives.removeAttribute("hidden")
        word.removeAttribute("hidden")
        newGame.initalizeGame();
        revealed = newGame.hiddenWord;
        word.innerHTML = revealed;
        
        console.log(newGame.currWord)
    })

    //User submits their answer with submit button
    // guessSubmit.addEventListener("click",function() {
    //     letter = document.getElementById('letterGuess').value;
    //     revealed = newGame.checkGuess(letter, revealed);
    //     word.innerHTML = revealed;
    //     lives = revealed
        
    // });

    // User Uses the Enter key
    guessEnter.addEventListener("keypress",function(event){
        letter = document.getElementById('letterGuess').value;
        if (event.key === "Enter"){
            event.preventDefault();
            newGame.checkGuess(letter, revealed);
            revealed = newGame.hiddenWord;
            word.innerHTML = revealed;
            lives.innerHTML = newGame.lives;
            guessEnter.value = ""
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


    constructor(currWord, lives, gameStatus, hiddenWord) {
        /*
        Define the variables for the objects created by this class.
        */
        this.currWord = currWord;
        this.hiddenWord = hiddenWord;
        this.wordArr = ['apple', 'sunshine', 'bicycle', 'ocean', 'chocolate', 'adventure', 'music', 'moonlight', 'serendipity', 'rainbows'];
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

        for (let index = 0; index < this.currWord.length; index++) {
            console.log(this.hiddenWord);
            if (letter === this.currWord[index]) {
                modString += letter;
            }else if (this.currWord[index] === revealed[index]) {
                console.log("reveladed letter")
                modString += revealed[index];
            }else{
                modString += '-';
                this.decLife();
            }
            this.hiddenWord = modString
        }

        
        //return the hiddenWord and the value
        // return [this.hiddenWord, this.lives];

        // console.log(this.hiddenWord);
        // if (matchesCount.length == 0) {
        //     // decemement life
        //     this.decLife()
        // }
    }
}





