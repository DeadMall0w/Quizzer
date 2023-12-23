async function ShowFile() {
  const quizList = document.getElementById("quiz-list");
  let list = [];
  for (let index = 1; index < 50; index++) {
    try {
      const response = await fetch("Quizs/quiz" + index.toString() + ".json");
      list.push("Quizs" + index.toString());
      // Vérifiez si la réponse indique un succès (status 200)
      if (response.ok) {
        const data = await response.json();

        // Vous pouvez faire quelque chose avec 'data' ici si nécessaire

        // Créez des liens pour chaque fichier
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = `quiz.html?quiz=${index}`;
        link.textContent = data.quizName;
        listItem.appendChild(link);
        quizList.appendChild(listItem);

      } else {
        // Arrêtez la boucle si le fichier n'existe pas
        break;
      }
 
    } catch (error) {
      break;
    }
  }
}

// Appelez la fonction pour l'exécuter
ShowFile();

function NewQuiz() {
  // Ajoutez le code pour créer un nouveau quiz ici
}