"use strict";
// import {words} from "index"
// import { words } from "../index.mjs";
const WORDS_ARR = ['apple', 'sunshine', 'bicycle', 'ocean', 'chocolate', 'adventure', 'music', 'moonlight', 'serendipity', 'rainbows'];

// Listen for Click Event where user clicks Start
document.addEventListener("DOMContentLoaded", function(){
    const game = new wordGame();
//----------------------GAME START----------------------
    start.addEventListener('click', function(){
        game.initalizeGame(WORDS_ARR);
    })

//----------------------Listen for inputs----------------------
    document.getElementById('submitGuess').addEventListener('click',function(){
        game.checkGuess(document.getElementById('letterGuess').value);
    })

    document.getElementById('letterGuess').addEventListener("keypress",function(event){
        if (event.key === "Enter"){
            event.preventDefault();
            game.checkGuess(document.getElementById('letterGuess').value);
        }
    });

});

// Remove/Add Hidden Attributes 



// let words
// let WORDS_LENGTH
// document.addEventListener("DOMContentLoaded", function(){
//     let letter
//     let revealed
//     let restart = document.getElementById('restartGame');
//     let lives = document.getElementById('totalLives');
//     const start = document.getElementById('start');
//     const guessEnter = document.getElementById('letterGuess');
//     const guessSubmit = document.getElementById('submitGuess');
//     const word = document.getElementById('wordField');
//     const newGame = new wordGame();

//     start.addEventListener("click", function(){
//         fetch('/start')
//         .then(response => response.json())
//         .then(data => {
//             words = data
//             console.log(words.array[50])
//             console.log(words.array.length);
//             WORDS_LENGTH = words.array.length
//         })
//         // User starts the game
//         // Hide and unhide respective tags
//         start.setAttribute('hidden', true);
//         guessEnter.removeAttribute("hidden");
//         guessSubmit.removeAttribute("hidden");
//         lives.removeAttribute("hidden")
//         word.removeAttribute("hidden")
//         newGame.initalizeGame();

//         //Hide and render the word in the browser
//         revealed = newGame.hiddenWord;
//         word.innerHTML = revealed;
        
//         // console.log(newGame.currWord)
//     })

//     //User submits their answer with submit button
//     // guessSubmit.addEventListener("click",function() {
//     //     letter = document.getElementById('letterGuess').value;
//     //     revealed = newGame.checkGuess(letter, revealed);
//     //     word.innerHTML = revealed;
//     //     lives = revealed
        
//     // });

//     // User Uses the Enter key
    // guessEnter.addEventListener("keypress",function(event){
    //     letter = document.getElementById('letterGuess').value;
    //     if (event.key === "Enter"){
    //         event.preventDefault();
    //         newGame.checkGuess(letter, revealed);
    //         revealed = newGame.hiddenWord;
    //         word.innerHTML = revealed;
    //         lives.innerHTML = newGame.lives;
    //         guessEnter.value = ""
    //     }
    //     if (newGame.gameStatus === 'DEAD') {
    //         guessSubmit.setAttribute('hidden', true);
    //         guessEnter.setAttribute('hidden', true);
    //         start.removeAttribute('hidden');
    //     }
    // });

    
// })

class wordGame{
    constructor(currWord, lives, gameStatus, hiddenWord) {
        /*
        Define the variables for the objects created by this class.
        */
        // console.log(WORDS_ARR)
        this.currWord = currWord;
        this.hiddenWord = hiddenWord;
        this.lives = lives;
        this.gameStatus = gameStatus;
        this.wordsArr =  WORDS_ARR;
        this.usedLetterArr = []
    }

    initalizeGame(){
        this.currWord = this.getWord();                 // Get a random word from the array
        this.hiddenWord = this.hideWord(this.currWord)  // Censor Displayed word
        this.gameStatus = 'ALIVE';                      // Set gameStatus to Alive
        this.lives = 5;                                 // Set lives counter to 5
        document.getElementById('usedLetter').innerHTML = this.usedLetterArr;
        document.getElementById('start').setAttribute('hidden', true);         // start button
        document.getElementById('letterGuess').removeAttribute('hidden');      // input field
        document.getElementById('letterGuess').focus();
        document.getElementById('submitGuess').removeAttribute('hidden');      // submit button

        document.getElementById('totalLives').innerHTML = this.lives;
        document.getElementById('lives').removeAttribute('hidden') ;            // lives counter

        document.getElementById('wordField').removeAttribute('hidden');        // word to guess - hidden
        document.getElementById('wordField').innerHTML = this.hiddenWord;

        console.log(this.currWord, this.hiddenWord, this.gameStatus, this.lives)
    }

    checkUsedLetter(letter){
        //implement a sorting and binary search algorithm

        //O(n) search implementation for testing
        if(this.usedLetterArr.length === 0){
            this.usedLetterArr.push(letter);
            document.getElementById('usedLetter').innerHTML = this.usedLetterArr;
        }else{
            for (const value of this.usedLetterArr) {
                
                if(letter === value){
                    document.getElementById('instructions').innerHTML = 'Letter has been used.';
                    return false
                }else{
                    this.usedLetterArr.push(letter);
                    this.usedLetterArr.sort();
                    document.getElementById('usedLetter').innerHTML = this.usedLetterArr;
                    break
                }
            }
        }
        console.log(this.usedLetterArr)
    }

    getWord(){
        /*
        Generate an random number and use the number to access an index.
        */
        // console.log(this.wordArr.array.length)
        const min = 0
        const max = this.wordsArr.length-1;//this.wordsArr.length-1;
        let randIndex = Math.floor(Math.random() * (max - min) + min);
        return this.currWord = this.wordsArr[randIndex];
    }

    hideWord(currWord){
        /*
        hide all letters, only called at beggining of game
        */
        let modString = ''
        for (const key in currWord) {
            modString = modString + '-';
        }
        this.hiddenWord = modString;
        return this.hiddenWord;
    }

    decLife() {
        this.lives -= 1;
        document.getElementById('totalLives').innerHTML = this.lives;
    }

    checkGuess(letter) {
        let modString = ''
        let matched = false;
        let letterIsUsed = this.checkUsedLetter(letter);

        // LOOP through and check each letter, revealing each instance of the letter
        for (let index = 0; index < this.currWord.length; index++) {
            if (letter === this.currWord[index]) {
                // check if the letter matches the current pos in the word
                matched = true
                modString += letter;
            }else if (this.currWord[index] === this.hiddenWord[index]) {
                // copies the current pos to the modified string
                modString += this.hiddenWord[index];
            }else{
                // the letter didn't match the pos's letter
                modString += '-';
            }
        }
        this.hiddenWord = modString

        //check if the letter did not exist in the string, and if it didn't dec life
        if (matched === false && letterIsUsed !== false) {
            this.decLife();
        }

        if (this.lives === 0) {
            this.gameOver();
        }else{
            document.getElementById('wordField').innerHTML = this.hiddenWord;
            document.getElementById('letterGuess').focus();
            document.getElementById('letterGuess').value = '';
            // return this.hiddenWord
        }
    }


    gameOver(){
        this.hiddenWord = 'Game Over';
        this.gameStatus = 'DEAD';
        this.lives = 5;
        this.usedLetterArr = []
        document.getElementById('wordField').innerHTML = this.hiddenWord;
        document.getElementById('letterGuess').setAttribute('hidden', true)
        document.getElementById('start').removeAttribute('hidden');                 // start button
        document.getElementById('submitGuess').setAttribute('hidden', true);        // submit button
        document.getElementById('lives').setAttribute('hidden', true);              // lives counter

        // document.getElementById('wordField').removeAttribute('hidden');        // word to guess - hidden
    }
    winner(){
        
    }
}