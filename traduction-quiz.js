let questions = {};
let questionIndex = 0;
let inputSubmited = false;
let randomMode = true;

const questionText = document.getElementById("question-text");
const questionCountText = document.getElementById("question-count");
const inputText = document.getElementById('input-text');
const responseText = document.getElementById('response-text');
const randomButton = document.getElementById('random-button');



document.addEventListener('DOMContentLoaded', function() {
  inputText.addEventListener('keydown', function(event) {
    if (event.keyCode === 13 || event.keyCode === 10) {
      SubmitAnswer();
    }
  });
});


async function LoadQuiz(){
  const urlParams = new URLSearchParams(window.location.search);
  const quizIndex = urlParams.get('quiz');
  if(quizIndex == -1){
    const quizData = localStorage.getItem('customQuizData');
    if (quizData) {
        try {
            questions = JSON.parse(quizData).vocabulaire;
            questionIndex = 0;
            LoadQuestion();
        } catch (error) {
            console.error("Erreur lors du chargement du quiz : ", error);
        }
    } else {
        console.error("Aucun quiz n'a été sélectionné.");
    }
  }else{
    try {
      const response = await fetch("Quizs/quiz"+ quizIndex.toString()+".json");
      const data = await response.json();
      questions = data.vocabulaire;
      questionIndex = 0;
      LoadQuestion();
    } catch (error) {
      console.error("Erreur lors du chargement du quiz : ", error);
    }
  }
}

function Quit(){
  window.location.href = "index.html";
}

function LoadQuestion(){
    questionText.textContent = questions[questionIndex].langue1;
    questionCountText.textContent = (questionIndex+1) + "/" + questions.length;
}

function SubmitAnswer(){
  if (inputSubmited == false){
    let nbError = CheckAnswer(questions[questionIndex].langue2, inputText.value);
    if (nbError == 0){
      responseText.innerHTML  = "Bonne réponse !";
      inputText.style.backgroundColor = '#2d7a4d';
      responseText.style.color = '#2d7a4d';
    }else if(nbError < 3){
      responseText.innerHTML  = questions[questionIndex].langue2;
      inputText.style.backgroundColor = '#5d4102';
      responseText.style.color = '#5d4102';
    }else{
      responseText.innerHTML  = questions[questionIndex].langue2;
      inputText.style.backgroundColor = '#680000';
      responseText.style.color = '#A50000';
    }
    inputSubmited = true;
  }else{
      ResetInputsTexts();
      if (randomMode){
        questionIndex = RandomNumber(0,questions.length-1);
      }else{
        questionIndex++;
      }
      inputSubmited = false;
      LoadQuestion();
  }
}

function RandomMode(){
  randomMode = !randomMode;
  if (randomMode == true){
    randomButton.innerText = "Mode séquentiel";
    randomButton.style.backgroundColor = '#53417a';
  }else{
    randomButton.innerText = "Mode aléatoire";
    randomButton.style.backgroundColor = '#3d6d8b';
  }
}

function RandomNumber(min = 1, max = 10) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function SkipQuestion(){
  inputSubmited = false;
  if(randomMode){
    questionIndex = RandomNumber(0,questions.length-1);
  }else{
    questionIndex += 1;
  }
  ResetInputsTexts();
  LoadQuestion();
}

function ResetInputsTexts(){
  responseText.innerHTML  = "";
  inputText.style.backgroundColor = '#555';
  inputText.value = "";
}

function ShowQuestions(){
  alert("Pas encore disponible :[");
}
function LevenshteinDistance(s1, s2) {
  if (s1.length < s2.length) {
      return LevenshteinDistance(s2, s1);
  }
  if (s2.length == 0) {
      return s1.length;
  }
  let previousRow = Array.from({length: s2.length + 1}, (_, i) => i);
  for (let i = 0; i < s1.length; i++) {
      let currentRow = [i + 1];
      for (let j = 0; j < s2.length; j++) {
          let insertions = previousRow[j + 1] + 1;
          let deletions = currentRow[j] + 1;
          let substitutions = previousRow[j] + (s1[i] != s2[j]);
          currentRow.push(Math.min(insertions, deletions, substitutions));
      }
      previousRow = currentRow;
  }
  return previousRow[previousRow.length - 1];
}

function CheckAnswer(correctAnswer, userAnswer) {
  userAnswer = userAnswer.toLowerCase();
  correctAnswer = correctAnswer.toLowerCase();
  if (correctAnswer == userAnswer) {
      return 0;
  }
  if (correctAnswer.trim() == userAnswer.trim()) {
    if(userAnswer[userAnswer.length - 1] == " "){
      return 0;
    }else{
      return 1;
    }
  }
  if (userAnswer.includes(correctAnswer)) {
      return 1;
  } else {
      return LevenshteinDistance(userAnswer, correctAnswer);
  }
}

RandomMode();
LoadQuiz();
