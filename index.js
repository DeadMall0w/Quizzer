async function ShowFile() {
  const quizList = document.getElementById("quiz-list");
  let list = [];
  for (let index = 1; index < 50; index++) {
    try {
      const response = await fetch("Quizs/quiz" + index.toString() + ".json");
      list.push("Quizs" + index.toString());
      if (response.ok) {
        const data = await response.json();

        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = `quiz.html?quiz=${index}`;
        link.textContent = data.quizName;
        listItem.appendChild(link);
        quizList.appendChild(listItem);

      } else {

        break;
      }
 
    } catch (error) {
      break;
    }
  }
}


ShowFile();

function NewQuiz() {
  // TODO 
}

function NewQuiz(){
  alert("Pas encore disponible :[");
}
function loadFile() {
  const fileInput = document.getElementById('myFile');
  const file = fileInput.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
          const quizData = JSON.parse(event.target.result);
          localStorage.setItem('customQuizData', JSON.stringify(quizData));
          window.location.href = `quiz.html?quiz=${-1}`;
      };
      reader.readAsText(file);
  } else {
      alert('No file selected!');
  }
}

