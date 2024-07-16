let computerGuess;
let userGuess=[];
let userTextUpdate=document.getElementById('textOutput');
let userNumberUpdate=document.getElementById('inputBox');
let audio=new Audio("sound.wav");


const init=()=>{
    computerGuess=(Math.floor(Math.random()*100));

    document.getElementById("newGameButton").style.display="none";
    document.getElementById("gameArea").style.display="none";
};

const startGame=()=>{
    document.getElementById("gameArea").style.display="block";
    document.getElementById("welcomeScreen").style.display="none";
};

const startNewGameButton= ()=>{
    document.getElementById("newGameButton").style.display="inline";
    userNumberUpdate.setAttribute('disabled',true);
};

const startNewGame=()=>{
    window.location.reload(); 
};

const comparedGuess=()=>{
    const userNumber=Number(userNumberUpdate.value);
    userGuess=[...userGuess,userNumber];
    document.getElementById('Guesses').innerHTML= userGuess;
    audio.play();

    if(userGuess.length < maxGuess){
        if(userNumber > computerGuess){
            userTextUpdate.innerHTML="Your Guess is Too High!!";
            userNumberUpdate.value='';
        } else if(userNumber < computerGuess){
            userTextUpdate.innerHTML="Your Guess is Too Low!!";
            userNumberUpdate.value='';
        }else{
            userTextUpdate.innerHTML="Hurray! Your Guess is Correct.";
            userNumberUpdate.value='';
            startNewGameButton();
        }
    }else{
        if(userNumber > computerGuess){
            userTextUpdate.innerHTML=`You Loose! Correct Number was ${computerGuess}`;
            userNumberUpdate.value='';
            startNewGameButton();
        } else if(userNumber < computerGuess){
            userTextUpdate.innerHTML=`You Loose! Correct Number was ${computerGuess}`;
            userNumberUpdate.value='';
            startNewGameButton();
        }else{
            userTextUpdate.innerHTML="Hurray! Your Guess is Correct.";
            userNumberUpdate.value='';
            startNewGameButton();
        }
    }
    document.getElementById('attempts').innerHTML=userGuess.length;
};

const easyMode=()=>{
    maxGuess=10;
    audio.play();
    startGame();
};

const hardMode=()=>{
    maxGuess=5;
    audio.play();
    startGame();
};
