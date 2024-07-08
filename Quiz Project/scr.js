const questions = [
    {
        question:"How many times has india won the Asia Cup?",
        answers : [
            { text:"3",correct: false},
            { text:"4",correct: false},
            { text:"7",correct: true},
            { text:"9",correct: false},
        
       ]
    },
    {
        question:"How many players are there in each cricket team on the field during a match?",
        answers : [
            { text:"8",correct: false},
            { text:"10",correct: false},
            { text:"11",correct: true},
            { text:"16",correct: false},
        
       ]
    },
    {
        question:"Which country is considered the birthplace of cricket?",
        answers : [
            { text:"India",correct: false },
            { text:"Australia",correct:false },
            { text:"England",correct: true},
            { text:"South Africa",correct: false},
        
       ]
    },
    {
        question:"How many times has india won the Cricket World cup?",
        answers : [
            { text:"3",correct: false},
            { text:"2",correct: true},
            { text:"4",correct: false},
            { text:"5",correct: false},
        
       ]
    }
    ,
    {
        question:"When did india play its Test match?",
        answers : [
            { text:"1934",correct: false},
            { text:"1932",correct: true},
            { text:"1945",correct: false},
            { text:"1954",correct: false},
        
       ]
    }

];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton =document.getElementById("next-btn");
let currentQuestionIndex =0;
let score=0;
function startQuiz(){
    let currentQuestionIndex=0;
    let score=0;
    nextButton.innerHTML="Next";
    showQuestion();
    
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;

    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of  ${questions.length}`;
    nextButton.innerHTML="";
    nextButton.style.display= "none";
    
}
function  handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();

