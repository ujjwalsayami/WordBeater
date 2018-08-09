window.addEventListener('load', init);

//Available Game Levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

//To change level
const currentLevel = levels.medium;

//global variable
let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');


const words = [
    'ujjwal',
    'miscellaneous',
    'firebase',
    'code',
    'establishment',
    'javascript',
    'react-native',
    'revolver',
    'notifications',
    'password',
    'authentication',
    'aggregation',
    'constructor',
    'definition',
    'redeclaration '
];

//Intitialize Game
function init(){
    
    //setting game time as per level
    seconds.innerHTML = currentLevel;

    //Load word from array
    showWord(words);

    //Call countdown every second
    setInterval(countdown, 1000);

    //Checkgame status
    setInterval(checkStatus, 50);

    //Start matching input when typing completed
    wordInput.addEventListener('input', startWatch);
}

//Pick and show random word
function showWord(words){
    //Generate random array index
    const randIndex = Math.floor(Math.floor(Math.random() * words.length ));

    //Output random word
    currentWord.innerHTML = words[randIndex];

}

//Countdown timer
function countdown(){
    //Make sure time is not run out
    if(time > 0){
        //then decrement
        time--;

    }else if(time === 0){
        //then game is over
        isPlaying = false;
    }

    //Show time
    timeDisplay.innerHTML = time;
}

function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over, Try again!';
        score = -1; //Since new game starts only when we complete typing
    }
}

//Start Watch
function startWatch(){
    if(matchWords()){
     isPlaying = true;
     time = currentLevel + 1;
     showWord(words);
     wordInput.value = '';
     score++; 
    }

    if(score === -1){ //to display score Zero
        scoreDisplay.innerHTML = 0;

    }else{
    scoreDisplay.innerHTML = score;
    }

}

//match the current word to wordInput
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!';
        return true;
    }else{
        message.innerHTML = 'wrong!';
        return false;
    }
}