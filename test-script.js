// document.addEventListener('DOMContentLoaded', function() {
//     // Votre code JavaScript ici, y compris la gestion de l'événement "keydown"
//     const inputElement = document.getElementById('text-areat');
  
//     inputElement.addEventListener('keydown', function(event) {
//       if (event.keyCode === 13 || event.keyCode === 10) {
//         Valid();
//       }
//     });
//   });
const questionText = document.getElementById("question-text");
const validButton = document.getElementById("valid-btn");
let answerButtons = document.querySelectorAll(".answer-btn");
const numberQuestion = document.getElementById("nb-question");
// const reponseText = document.getElementById('reponse-text');
// const textarea = document.getElementById('text-area');

let questionID = 0;
let valided = false;
let btnSlected = [];
let correctAnswer = 0;
//* 10, 15, 

let questions = {};
async function LoadFiles(filePath){
    try {
      const response = await fetch(filePath);
      const data = await response.json();
      questions = data.questions;

      LoadQuestion(0);
    } catch (error) {
      console.error('Erreur :', error);
    }

}




LoadFiles("Quizs/quiz2.json");

function Start() {
    questionID = 0;
    LoadQuestion(3);
}

function LoadQuestion(){
    if (questionID >= questions.length){
        alert("Vous avez terminer le quiz, appuyer sur recommencer");
        return;
    }
    numberQuestion.textContent = (questionID+1) + "/" + questions.length;
    questionText.textContent = questions[questionID].question;
    Clear();
    if (questions[questionID].type == "multipleChoice"){
        btnSlected = [];
      for (let index = 0; index < questions[questionID].options.length; index++) {
        CreateBtn(index+1);
        btnSlected.push(false);
      }
      answerButtons = document.querySelectorAll(".answer-btn");
    }
}


function Clear(){
    for (let index = 0; index < answerButtons.length; index++) {
        answerButtons[index].remove();
        
    }
}


function CreateBtn(btnID){
  const button = document.createElement('button');

  button.classList.add('answer-btn');
  button.id = 'answers-' + btnID;
  button.textContent = questions[questionID].options[btnID-1];
  button.onclick = function() {
    Answer(btnID); 
  };

  const container = document.getElementById('answers');
  container.appendChild(button);
}


function Valid(){
    if (!valided){
        // ShowAnswer();
        ChekAnswers();
        valided = true;
        validButton.textContent = "Suivant";
    }else{
        // textarea.value = "";
        // AjusterHauteur();
        validButton.textContent = "Valider";
        // reponseText.textContent = "";
        questionID += 1;
        LoadQuestion(questionID);
        valided = false;
    }
}

function AjusterHauteur(){
  textarea.style.height = 'auto';
  textarea.style.height = (textarea.scrollHeight) + 'px';
}


function Restart(){
    questionID = 0;
    correctAnswer = 0;
    LoadQuestion(questionID);
    valided = false;
}

function Skip(){
    questionID += 1;
    LoadQuestion(questionID);
    ShowAnswer();
    valided = false;
    textarea.value = "";
}

function ShowAnswer(){
  // reponseText.textContent = questions.questions[questionID].réponse;
}
function ChekAnswers() {
    // if(inputAnswer.value.toLowerCase() == voca.vocabulaire[questionID].espagnol.toLowerCase()){
    //     inputAnswer.classList.add('correct');
    //     // inputAnswer.classList.remove('white');
    //     inputAnswer.classList.remove('incorrect');
    //     correctAnswer+=1;

    // }else{
    //     inputAnswer.classList.add('incorrect');
    //     // inputAnswer.classList.remove('white');
    //     inputAnswer.classList.remove('correct');
    //     inputAnswer.value += " || reponse : " + voca.vocabulaire[questionID].espagnol;
        
    // }



    let isCorrect = true;
    // alert(questions[questionID].correctAnswer);
    for (let i = 0; i < btnSlected.length; i++) {
        if (questions[questionID].correctAnswer == i){
            if (btnSlected[i] == true){
                answerButtons[i].style.backgroundColor = "green";
            }else{
                isCorrect = false;
                answerButtons[i].style.backgroundColor = "green";
            }
        }else{
            if (btnSlected[i] == true){
                isCorrect = false;
                answerButtons[i].style.backgroundColor = "red";
            }
        }
    }

    if(isCorrect == true){
        correctAnswer+=1;
    }
}

function Answer(_id) {
    if(valided == true){
        return;
    }
    if (btnSlected[_id-1] == false){
        btnSlected[_id-1] = true;
        answerButtons[_id-1].style.backgroundColor = '#778DA9';
    }else{
        btnSlected[_id-1] = false;
        answerButtons[_id-1].style.backgroundColor = '#f1f2f0';

    }
}
