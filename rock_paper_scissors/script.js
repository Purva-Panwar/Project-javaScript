let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


 const genCompChoice =() => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx =  Math.floor( Math.random() * 3 );
    return options[randIdx];
 };
 const drawGame = () => {
   
    msg.innerText = "Game was Draw. play again";
    msg.style.backgroundColor = "#081b31";
 };
 const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
       
        msg.innerText = `You win!  Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        
          msg.innerText = `You lose ${compChoice} beats Your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
 }


 const playGame = (userChoice) => {
    ////console.log("User choice = ", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    /////console.log("Computer choice = ", compChoice);

    if(userChoice === compChoice){
        //draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "Rock"){
            // paper, scissor
            userWin = compChoice === "Paper" ? false : true;
        } else if(userChoice === "Paper"){
            // rock, scissor
             userWin = compChoice === "Scissors"? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "Rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
   //console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
     //console.log("choice was clicked", userChoice);
     playGame(userChoice);
    });

})