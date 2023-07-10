const quizDB=[
{
    question:"Q1:What is HTML",
    a:"HelloTo My Lord",
    b:"HighText Markup Language",
    c:"HighestText Market Language",
    d:"HyperText Markup Language",
    ans:"ans4"
},
{
    question:"Q2:What is CSS Stands For?",
    a:"Cascading Style Sheet",
    b:"Casting Sytle Sheet",
    c:"Costing Stimulating Sheet",
    d:"Career in It Show Sheet",
    ans:"ans1"
},
{
    question:"Q3:What is Http?",
    a:"How To Text Protocol",
    b:"HyperText Transfer Protocal",
    c:"HidingText Transfer Protocal",
    d:"HiddenText Transfer Protocal",
    ans:"ans2"
}
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers =document.querySelectorAll('.answer');

var questionCount = 0;
var score =0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();


const getCheckAnswer =() =>{
 var answer;

 answers.forEach((curAnsElem) =>{
     if(curAnsElem.checked)
     {
        answer =curAnsElem.id;
     }
 });
 return answer;
};

const deselectAll = () =>
{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}

submit.addEventListener('click',() =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer===quizDB[questionCount].ans){
        score++;
    };
    questionCount++;

    if(questionCount<quizDB.length){
        loadQuestion();
        deselectAll();
    }
    else{
     let message = `Your score for the Quiz is ${(score /quizDB.length) * 100}%`; 
     document. write(`<p>${message}</p>`);
    }
});