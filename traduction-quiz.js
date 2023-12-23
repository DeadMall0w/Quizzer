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


async function LoadQuiz(){
  const urlParams = new URLSearchParams(window.location.search);
  const quizIndex = urlParams.get('quiz');
    try {
      const response = await fetch("Quizs/quiz"+ quizIndex.toString()+".json");
      const data = await response.json();
      questions = data.vocabulaire;
      questionIndex = 0;
      LoadQuestion();
    } catch (error) {

    }
}

function Quit(){
  window.location.href = "/index.html";
}

function LoadQuestion(){
    questionText.textContent = questions[questionIndex].langue1;
    questionCountText.textContent = (questionIndex+1) + "/" + questions.length;
}

function SubmitAnswer(){
  let nbError = CheckAnswer(inputText.value, questions[questionIndex].langue2);
  if (nbError == 0){
    inputText.style.backgroundColor = '#2d7a4d'
  }else if(nbError < 3){
    inputText.style.backgroundColor = '#5d4102'
  }else{
    inputText.style.backgroundColor = '#5d0202'
  }
}


function RandomNumber(min = 1, max = 10) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
      return 1;
  }
  if (userAnswer.includes(correctAnswer)) {
      return 1;
  } else {
      return LevenshteinDistance(userAnswer, correctAnswer);
  }
}

LoadQuiz();
