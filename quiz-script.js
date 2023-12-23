let questions = {};
let questionIndex = 0;
const questionText = document.getElementById("question-text");


async function LoadQuiz(filePath){
    try {
      const response = await fetch("Quizs/"+ filePath);
      const data = await response.json();
      questions = data.questions;
      questionIndex = 0;
      LoadQuestion();
    } catch (error) {
      console.error('Erreur :', error);
    }
}


function LoadQuestion(){
    questionText.textContent = questions[questionIndex].question;

}

LoadQuiz("quiz2.json");
