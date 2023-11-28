document.addEventListener('DOMContentLoaded', function() {
    // Votre code JavaScript ici, y compris la gestion de l'événement "keydown"
    const inputElement = document.getElementById('answer-input');
  
    inputElement.addEventListener('keydown', function(event) {
      if (event.keyCode === 13 || event.keyCode === 10) {
        Valid();
      }
    });
  });
const questionText = document.getElementById("question-text");
const validButton = document.getElementById("valid-btn");
const answerButtons = document.querySelectorAll(".answer-btn");
const numberQuestion = document.getElementById("nb-question");
const inputAnswer = document.getElementById('answer-input');


let questionID = 0;
let valided = false;
let btnSlected = [false,false,false,false];
let correctAnswer = 0;

const data = {
    "questions": [
        {
            "question": "Quel langage de programmation est principalement utilisé pour le développement d'applications Android ?",
            "options": ["Java", "C++", "Python", "Ruby"],
            "correct_option": 0
          },
          {
            "question": "Quelle entreprise a créé le système d'exploitation Windows ?",
            "options": ["Microsoft", "Apple", "Google", "IBM"],
            "correct_option": 0
          },
          {
            "question": "Qu'est-ce que le 'cloud computing' ?",
            "options": ["Un nouveau type de téléphone", "Un service de streaming musical", "Une technologie de stockage et de traitement de données en ligne", "Un logiciel de retouche photo"],
            "correct_option": 2
          },
          {
            "question": "Quelle est la signification de l'acronyme 'HTML' ?",
            "options": ["HyperText Markup Language", "High-Tech Multimedia Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
            "correct_option": 0
          },
          {
            "question": "Qui est considéré comme le co-fondateur d'Apple Inc. aux côtés de Steve Jobs ?",
            "options": ["Mark Zuckerberg", "Bill Gates", "Steve Wozniak", "Jeff Bezos"],
            "correct_option": 2
          },
          {
            "question": "Quelle est la plus grande plateforme de médias sociaux au monde en termes d'utilisateurs actifs ?",
            "options": ["Twitter", "LinkedIn", "Facebook", "Instagram"],
            "correct_option": 2
          },
          {
            "question": "Quel est le nom du premier ordinateur personnel largement utilisé, lancé en 1981 ?",
            "options": ["IBM PC", "Commodore 64", "Macintosh", "Altair 8800"],
            "correct_option": 0
          },
          {
            "question": "Quel protocole est couramment utilisé pour envoyer des courriels sur Internet ?",
            "options": ["FTP", "SMTP", "HTTP", "POP3"],
            "correct_option": 1
          },
          {
            "question": "Quelle entreprise est connue pour ses processeurs informatiques, notamment la série 'Core i' ?",
            "options": ["AMD", "Intel", "NVIDIA", "Qualcomm"],
            "correct_option": 1
          },
          {
            "question": "Quelle technologie sans fil permet le transfert de données à courte portée entre des appareils tels que des téléphones et des enceintes ?",
            "options": ["Bluetooth", "Wi-Fi", "NFC", "4G"],
            "correct_option": 0
          }
    ]
};

// const voca = {
  // "vocabulaire": [
  //   {
  //     "frc": "Citoyenneté",
  //     "espagnol": "Ciudadanía"
  //   },
  //   {
  //     "frc": "Mondes virtuels",
  //     "espagnol": "Mundos virtuales"
  //   },
  //   {
  //     "frc": "Espace privé",
  //     "espagnol": "Espacio privado"
  //   },
  //   {
  //     "frc": "Espace publique",
  //     "espagnol": "Espacio publicó"
  //   },
  //   {
  //     "frc": "Identités",
  //     "espagnol": "Identidades"
  //   },
  //   {
  //     "frc": "Échanges",
  //     "espagnol": "Intercambios"
  //   },
  //   {
  //     "frc": "Fictions",
  //     "espagnol": "Ficciones"
  //   },
  //   {
  //     "frc": "Réalités",
  //     "espagnol": "Realidades"
  //   },
  //   {
  //     "frc": "Innovations scientifiques",
  //     "espagnol": "Innovaciones científicas"
  //   },
  //   {
  //     "frc": "Responsabilités",
  //     "espagnol": "Responsabilidades"
  //   },
  //   {
  //     "frc": "Art",
  //     "espagnol": "Arte"
  //   },
  //   {
  //     "frc": "Pouvoir",
  //     "espagnol": "Poder"
  //   },
  //   {
  //     "frc": "Territoire",
  //     "espagnol": "Territorio"
  //   },
  //   {
  //     "frc": "Mémoire",
  //     "espagnol": "Memoria"
  //   },
  //   {
  //     "frc": "Diversité",
  //     "espagnol": "Diversidad"
  //   },
  //   {
  //     "frc": "Inclusion",
  //     "espagnol": "Inclusión"
  //   },
  //   {
  //     "frc": "Un robot",
  //     "espagnol": "Un robot"
  //   },
  //   {
  //     "frc": "Une créature fantastique",
  //     "espagnol": "Una criatura fantástica"
  //   },
  //   {
  //     "frc": "Les rencontres",
  //     "espagnol": "Los encuentros"
  //   },
  //   {
  //     "frc": "Un voyage dans le temps",
  //     "espagnol": "Un viaje por el tiempo"
  //   },
  //   {
  //     "frc": "Un mélange",
  //     "espagnol": "Un mezcla"
  //   },
  //   {
  //     "frc": "Autonome",
  //     "espagnol": "Autónomo"
  //   },
  //   {
  //     "frc": "Un bras",
  //     "espagnol": "Un brazo"
  //   },
  //   {
  //     "frc": "Un chirurgien, La chirurgie",
  //     "espagnol": "Un cirujano, la cirugía"
  //   },
  //   {
  //     "frc": "Agir",
  //     "espagnol": "Actuar"
  //   },
  //   {
  //     "frc": "Arriver",
  //     "espagnol": "Llegar"
  //   },
  //   {
  //     "frc": "Un risque",
  //     "espagnol": "Un riesgo"
  //   },
  //   {
  //     "frc": "États-Unis",
  //     "espagnol": "EE.UU"
  //   },
  //   {
  //     "frc": "Retourner → … à nouveau",
  //     "espagnol": "Volver → Ha vuelto a..."
  //   },
  //   {
  //     "frc": "Réussir à, obtenir",
  //     "espagnol": "Lograr"
  //   },
  //   {
  //     "frc": "L'entraide",
  //     "espagnol": "La ayuda mutua"
  //   },
  //   {
  //     "frc": "Le foie, hépatique",
  //     "espagnol": "El hígado, hepático"
  //   },
  //   {
  //     "frc": "Un poumon, pulmonaires",
  //     "espagnol": "Un pulmón, pulmonares"
  //   },
  //   {
  //     "frc": "Un rein, rénales",
  //     "espagnol": "Un riñón, renales"
  //   },
  //   {
  //     "frc": "Trouver",
  //     "espagnol": "Encuentrar"
  //   },
  //   {
  //     "frc": "Augmentation",
  //     "espagnol": "Un incremento, un aumento"
  //   },
  //   {
  //     "frc": "Don",
  //     "espagnol": "Donación"
  //   },
  //   {
  //     "frc": "Succès",
  //     "espagnol": "Éxito"
  //   },
  //   {
  //     "frc": "5 000, 2 000",
  //     "espagnol": "Cinco mil, dos mil"
  //   },
  //   {
  //     "frc": "357 392",
  //     "espagnol": "trescientos cincuenta y siete mil cuatrocientos noventa y dos"
  //   },
  //   {
  //     "frc": "30%",
  //     "espagnol": "Treinta porciento"
  //   },
  //   {
  //     "frc": "46,9",
  //     "espagnol": "Cuarenta y seis coma nueve"
  //   },
  //   {
  //     "frc": "Choisir",
  //     "espagnol": "Escoger"
  //   },
  //   {
  //     "frc": "La peau",
  //     "espagnol": "La piel"
  //   },
  //   {
  //     "frc": "Les jambes",
  //     "espagnol": "Las piernas"
  //   },
  //   {
  //     "frc": "Un chercheur",
  //     "espagnol": "Un investigador"
  //   },
  //   {
  //     "frc": "Le manque",
  //     "espagnol": "La escasez"
  //   },
  //   {
  //     "frc": "Une arbalette",
  //     "espagnol": "Una baliesta"
  //   },
  //   {
  //     "frc": "Une récolte",
  //     "espagnol": "Una cosecha"
  //   },
  //   {
  //     "frc": "La fumée",
  //     "espagnol": "El humo"
  //   },
  //   {
  //     "frc": "Abîmé",
  //     "espagnol": "Estropeado"
  //   },
  //   {
  //     "frc": "Bon pour la santé",
  //     "espagnol": "Saludable"
  //   },
  //   {
  //     "frc": "Substances dangereuses",
  //     "espagnol": "Sustancias peligrosas"
  //   },
  //   {
  //     "frc": "Les nouveaux nés",
  //     "espagnol": "Los recién nacidos"
  //   },
  //   {
  //     "frc": "Gaz à effet de serre",
  //     "espagnol": "Gases de efecto invernadero"
  //   }
  // ]
// }

const voca =  {
  "vocabulaire":[
  {
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "abalanzarse",
      "espagnol": "se jeter"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "acrecentar",
      "espagnol": "augmenter"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "a diario",
      "espagnol": "chaque jour"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "alcanzar",
      "espagnol": "atteindre"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "amnistia",
      "espagnol": "l'amnistie"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "a nado",
      "espagnol": "la nage"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "ansiado",
      "espagnol": "angoissé"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "añoranza",
      "espagnol": "le regret"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "arrestos",
      "espagnol": "les arrestations"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "balance",
      "espagnol": "le bilan"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "balsas",
      "espagnol": "les radeaux"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "balseros",
      "espagnol": "ceux qui traversent une étendue d'eau en radeau"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "caída",
      "espagnol": "la chute"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "cobrar",
      "espagnol": "soutirer de l'argent"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "constituir",
      "espagnol": "constituer"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "convertirse",
      "espagnol": "se transformer"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "coyotes",
      "espagnol": "les passeurs"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "crecimiento",
      "espagnol": "la croissance"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "cruzar",
      "espagnol": "traverser"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "el chicano",
      "espagnol": "immigrant d'origine mexicaine"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "diario",
      "espagnol": "le quotidien (journal)"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "documentación",
      "espagnol": "les papiers"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "dueño",
      "espagnol": "le patron"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "espaldas mojadas",
      "espagnol": "les dos mouillés (clandestins traversant le Rio Grande à la nage)"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "focos",
      "espagnol": "les foyers"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "franquear",
      "espagnol": "franchir"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "hispanohablantes",
      "espagnol": "hispanophones"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "hundimiento",
      "espagnol": "l'effondrement"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "ilegales / los pollos",
      "espagnol": "les clandestins / les sans-papiers d'identité"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "jerga",
      "espagnol": "le jargon / le charabia"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "legalizar",
      "espagnol": "légaliser"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "lograr",
      "espagnol": "réussir"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "mapa",
      "espagnol": "la carte"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "mezcla",
      "espagnol": "un mélange"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "oleada",
      "espagnol": "la grande vague"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "oriundo",
      "espagnol": "originaire"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "petaca",
      "espagnol": "la population"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "por barba",
      "espagnol": "par tête de pipe"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "ranchero",
      "espagnol": "le fermier"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "regresar",
      "espagnol": "retourner"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "rotulado",
      "espagnol": "dessiné"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "superar",
      "espagnol": "surpasser"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "tamaño",
      "espagnol": "la taille"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "tortilla",
      "espagnol": "la galette de maïs"
  },
  {
      "type": "traduction",
      "languages": [
          ":flag_fr:Francais:flag_fr:",
          ":flag_es:Espagnol:flag_es:"
      ],
      "frc": "trasfondo",
      "espagnol": "le problème de fond"
  }
]
}


// numberQuestion.textContent = (questionID+1) + "/" + data.questions.length;

// for (let i = 0; i < answerButtons.length; i++) {
//     const button = answerButtons[i];

//     button.addEventListener('mouseover', () => {
//         if (valided){
//             return;
//         }
//         if(!button.classList.contains('selected')){
//             button.style.backgroundColor = '#415A77';
//             button.style.color = 'white';
//         }
//     });

//     button.addEventListener('click', () => {
//         if (valided){
//             return;
//         }
//         if (button.classList.contains('selected')) {
//             button.classList.remove('selected');
//             button.style.backgroundColor = '#f1f2f0';
//             button.style.color = 'black';
//         } else {
//             button.classList.add('selected');
//             button.style.backgroundColor = '#778DA9';
//             button.style.color = '';
//         }
//     });

//     button.addEventListener('mouseout', () => {
//         if (valided){
//             return;
//         }
//         if(!button.classList.contains('selected')){
//             button.style.backgroundColor = '#f1f2f0';
//             button.style.color = '';
//         }
//     });
// }

function Start() {
    questionID = 0;
    LoadQuestion(3);
}

function LoadQuestion(_index){
    if (_index >= voca.vocabulaire.length){
        alert("GG Vous avez terminer le quizz avec " + correctAnswer + " bonne reponse sur " + voca.vocabulaire.length);
        return;
    }
    numberQuestion.textContent = (questionID+1) + "/" + voca.vocabulaire.length;
    questionText.textContent = voca.vocabulaire[_index].frc;
    
    // btnSlected = [false,false,false,false];
    // const currentQuestion = data.questions[_index];
    // questionText.textContent = currentQuestion.question;
    // for (let i = 0; i < answerButtons.length; i++) {
    //     answerButtons[i].classList.remove('selected');
    //     answerButtons[i].style.backgroundColor = '#f1f2f0';

    //     answerButtons[i].textContent = currentQuestion.options[i];
    // }
}

function Valid(){
    if (!valided){
        ChekAnswers();
        valided = true;
        validButton.textContent = "Suivant";
        // inputAnswer.classList.remove('correct', 'incorrect');
        // inputAnswer.classList.remove('white');
        inputAnswer.classList.remove('white');
    }else{
        inputAnswer.classList.add('white');
        inputAnswer.value = "";
        validButton.textContent = "Valider";
        questionID = nombreAleatoire(0,voca.vocabulaire.length);
        LoadQuestion(questionID);
        valided = false;
    }
}

function nombreAleatoire(min = 1, max = 10) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Restart(){
    questionID = 0;
    numberQuestion.textContent = (questionID+1) + "/" + data.questions.length;
    LoadQuestion(questionID);
    valided = false;
}

function Skip(){
    //questionID += 1;
questionID = nombreAleatoire(0,voca.vocabulaire.length);

    numberQuestion.textContent = (questionID+1) + "/" + data.questions.length;
    LoadQuestion(questionID);
    valided = false;
}

function ChekAnswers() {
    if(inputAnswer.value.toLowerCase() == voca.vocabulaire[questionID].espagnol.toLowerCase()){
        inputAnswer.classList.add('correct');
        // inputAnswer.classList.remove('white');
        inputAnswer.classList.remove('incorrect');
        correctAnswer+=1;

    }else{
        inputAnswer.classList.add('incorrect');
        // inputAnswer.classList.remove('white');
        inputAnswer.classList.remove('correct');
        inputAnswer.value += " || reponse : " + voca.vocabulaire[questionID].espagnol;
        
    }



    return;
    let isCorrect = true;

    for (let i = 0; i < btnSlected.length; i++) {
        if (data.questions[questionID].correct_option == i){
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
    if (btnSlected[_id] == false){
        btnSlected[_id] = true;
    }else{
        btnSlected[_id] = false;

    }
}

LoadQuestion(0);

