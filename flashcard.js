let questions = {};
let currentFlashcardIndex = -1;

const inputText = document.getElementById('input-text');
document.addEventListener('DOMContentLoaded', function() {
  inputText.addEventListener('keydown', function(event) {
    if (event.keyCode === 13 || event.keyCode === 10) {
      SubmitAnswer();
    }
  });
});

let flashcards = [];
function loadFlashcardsFromFile(file) {
  fetch(file)
      .then(response => response.text())
      .then(data => {
          const flashcardsFromFile = data.split('\n');
          flashcardsFromFile.forEach(flashcardData => {
              const flashcard = flashcardData.split(';;');
              if (flashcard.length > 1){
                flashcards.push(flashcard);
              }
            });
            // Maintenant que les flashcards sont chargées, afficher la première flashcard
            currentFlashcardIndex = -1;
            next();
      })
      .catch(error => console.error('Error loading flashcards:', error));
}

// Charger les flashcards à partir d'un fichier texte
loadFlashcardsFromFile('Quizs/flashcard.txt');

function show(){
  const flashcard = flashcards[currentFlashcardIndex];
    // document.getElementById('text-1').textContent = flashcard[0];
    document.getElementById('text-2').textContent = flashcard[1];
}

function next(){
  currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcards.length;
  const flashcard = flashcards[currentFlashcardIndex];
  document.getElementById('text-1').textContent = flashcard[0];
  document.getElementById('text-2').textContent = "";
  inputText.value  = "";
}
