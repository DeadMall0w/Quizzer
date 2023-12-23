let questions = {};
let questionIndex = 0;
const questionText = document.getElementById("question-text");
const questionCountText = document.getElementById("question-count");
const inputText = document.getElementById('input-text');

document.addEventListener('DOMContentLoaded', function() {
  inputText.addEventListener('keydown', function(event) {
    if (event.keyCode === 13 || event.keyCode === 10) {
      SubmitAnswer();
    }
  });
});


async function LoadQuiz(filePath){
    try {
      const response = await fetch("Quizs/"+ filePath);
      const data = await response.json();
      questions = data.vocabulaire;
      questionIndex = 0;
      LoadQuestion();
    } catch (error) {
      console.error('Erreur :', error);
    }
}


function LoadQuestion(){
    questionText.textContent = questions[questionIndex].langue1;
    questionCountText.textContent = (questionIndex+1) + "/" + questions.length;
}

function SubmitAnswer(){
  alert(inputText.value.toLowerCase());
}


LoadQuiz("anglais.json");
