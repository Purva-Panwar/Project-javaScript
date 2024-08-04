const wordDisplay=document.querySelector('.display');
const hangmanImage=document.querySelector('.first img');
const keyboard=document.querySelector('.keyboard');
const guessedText=document.querySelector('.guess b');
const gameModel=document.querySelector('.game-model');
const playAgain=document.querySelector('.play-again');
let currentWord,correctLetter=[],wrongGuess=0;
const maxGuess=6;

const gameover=(isVictory)=>{
    setTimeout(()=>{
        const modelText=isVictory ? `You found the word:`:`The correct word was:`;
      
        gameModel.querySelector("img").src=`images/${isVictory ? `victory` : 'lost'}.gif`;
        gameModel.querySelector("h4").innerText=`${isVictory ? `Congrats` : 'Game Over!'}`;
        gameModel.querySelector("p").innerHTML=`${modelText} <b> ${currentWord}</b>`;
        gameModel.classList.add("show");
    },300);
}

const wordList=[
    {
        word:"diamond",
        hint:"A precious gemstone known for its brilliance and hardness"
    },
    {
        word:"adventure",
        hint:"An exciting or daring experience "
    },
    {
        word:"science",
        hint:"The systemetic study of structure"
    },
    {
        word:"bicycle",
        hint:" A human-powered vehicle with two wheels"
    },
    {
        word:"sunset",
        hint:"The daiuly disappearance of the sun below the horizon"
    },
    {
        word:"camera",
        hint:"A device used to capture and record images or videos"
    },
    {
        word:"jazz",
        hint:"A genre of music characterized by improvisation and yncopation"
    }
];

const resetGame=()=>{
    correctLetter=[];
    wrongGuess=0;
    hangmanImage.src=`images/hangman-${wrongGuess}.svg`;
    guessedText.innerText=`${wrongGuess}/${maxGuess}`;
    keyboard.querySelectorAll("button").forEach(btn=>btn.disabled=false);
    wordDisplay.innerHTML=currentWord.split("").map(()=>`
    <li class="letter"></li>`).join("");
    gameModel.classList.remove("show");
}

const getElement=()=>{

    const {word ,hint}=wordList[Math.floor(Math.random()*wordList.length)];
    console.log(word);
    currentWord=word;
    document.querySelector(".hint b").innerText = hint;
    resetGame();
       
}
const initGame=(button,clickedLetter)=>{
    if(currentWord.includes(clickedLetter)){
        [...currentWord].forEach((letter,index)=>{
            if(letter===clickedLetter){
                correctLetter.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText=letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    }
    else{
       wrongGuess++;
       hangmanImage.src=`images/hangman-${wrongGuess}.svg`;
    }
    button.disabled=true;
    guessedText.innerText=`${wrongGuess}/${maxGuess}`;
    if(wrongGuess===maxGuess)return gameover(false);
    if(correctLetter.length===currentWord.length)return gameover(true);
}
for (let i = 97; i < 123; i++) {
    const button=document.createElement("button")
    button.innerText=String.fromCharCode(i);
    keyboard.appendChild(button)
    button.addEventListener("click",e=>
        initGame(e.target,String.fromCharCode(i))
    );
} 
getElement();

playAgain.addEventListener("click",getElement);
