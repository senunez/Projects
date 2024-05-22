import express from 'express';
const app = express();
const port = 3000;



// WORD LIST ___________________________________
import wordList from 'word-list';
import fs from 'fs';

// Load the words from the word-list file
export const words = fs.readFileSync(wordList, 'utf8').split('\n');

// Print the first 10 words
console.log(words.slice(0, 10));

app.get('/start', (req, res) => {
  res.json({ array: words})
});



//Middleware to handle forms
app.use(express.urlencoded({extended: true}));

// Serves static files
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



