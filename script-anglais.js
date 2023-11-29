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

const voca = {
    "vocabulaire":[
    {
        "espagnol": "Britain's need",
        "frc": " Besoin de la Grande-Bretagne"
    },
    {
        "espagnol": "backlog",
        "frc": "arriéré"
    },
    {
        "espagnol": "labour shortage:need for workers",
        "frc": "pénurie de main d'oeuvre"
    },
    {
        "espagnol": "raw materials",
        "frc": " matière première"
    },
    {
        "espagnol": "weakened economy",
        "frc": " économie affaiblie"
    },
    {
        "espagnol": "postwar",
        "frc": " après guerre"
    },
    {
        "espagnol": "rebuild",
        "frc": " reconstruire"
    },
    {
        "espagnol": "welcome",
        "frc": " acceuillir"
    },
    {
        "espagnol": "reject:turn down",
        "frc": " rejeter"
    },
    {
        "espagnol": "to fire",
        "frc": " virer"
    },
    {
        "espagnol": "to cope with",
        "frc": " faire face à"
    },
    {
        "espagnol": "scandal",
        "frc": " scandale"
    },
    {
        "espagnol": "usual environment",
        "frc": " environment habituelle"
    },
    {
        "espagnol": "devastating",
        "frc": " devastateur"
    },
    {
        "espagnol": "hardworking",
        "frc": " qui travail dur"
    },
    {
        "espagnol": "belong to",
        "frc": " appartenir à"
    },
    {
        "espagnol": "forced to",
        "frc": " être forcé à"
    },
    {
        "espagnol": "uprooted",
        "frc": " déraciné"
    },
    {
        "espagnol": "away from",
        "frc": "loin de"
    },
    {
        "espagnol": "have nothing but",
        "frc": " ne rien avoir d'autre que"
    },
    {
        "espagnol": "menial jobs:unskilled jobs",
        "frc": " emplois non qualifié"
    },
    {
        "espagnol": "ashamed",
        "frc": " honteux"
    },
    {
        "espagnol": "crammed:full of people",
        "frc": " bondé"
    },
    {
        "espagnol": "foreign",
        "frc": "étranger"
    },
    {
        "espagnol": "disdain:despise",
        "frc": "mépris"
    },
    {
        "espagnol": "desperate to:determined to",
        "frc": " être déterminé à"
    },
    {
        "espagnol": "go up/down the social ladder",
        "frc": " monter/descendre l'echelle sociale"
    },
    {
        "espagnol": "odd jobs",
        "frc": "petit boulots"
    },
    {
        "espagnol": "overcome",
        "frc": "surpasser"
    },
    {
        "espagnol": "to triumph over",
        "frc": "triompher de"
    },
    {
        "espagnol": "hurdles",
        "frc": "obstacles"
    },
    {
        "espagnol": "disdain:despise:scorn:look down on",
        "frc": " mépriser"
    },
    {
        "espagnol": "disdainful:scornful:despising",
        "frc": "méprisant"
    },
    {
        "espagnol": "make no fuss:go unnoticed",
        "frc": " ne pas faire d'histoire:passé inapercus"
    },
    {
        "espagnol": "expectation",
        "frc": " attente"
    },
    {
        "espagnol": "benefit from",
        "frc": " bénéficier de"
    },
    {
        "espagnol": "Eldorado",
        "frc": "Eldorado"
    },
    {
        "espagnol": "good housing",
        "frc": " bon logement"
    },
    {
        "espagnol": "mother country",
        "frc": " mère patrie"
    },
    {
        "espagnol": "identical right",
        "frc": "droit identique"
    },
    {
        "espagnol": "be entitled to:have the right to",
        "frc": " avoir droit à"
    },
    {
        "espagnol": "coming home",
        "frc": " revenir à la maison"
    },
    {
        "espagnol": "homesick",
        "frc": "mal du pays"
    },
    {
        "espagnol": "hopeful",
        "frc": " optimiste"
    },
    {
        "espagnol": "pessimistic",
        "frc": "pessimiste"
    },
    {
        "espagnol": "independently recruited",
        "frc": "recruté indépendamment"
    },
    {
        "espagnol": "actively recruited",
        "frc": " recruté activement"
    },
    {
        "espagnol": "dread:fear",
        "frc": "redouter"
    },
    {
        "espagnol": "immigratopn removal centre",
        "frc": "centre de rétention administratif"
    },
    {
        "espagnol": "deportation",
        "frc": " deportation"
    },
    {
        "espagnol": "inclusion",
        "frc": "inclusion"
    },
    {
        "espagnol": "exclusion",
        "frc": "exclusion"
    },
    {
        "espagnol": "intolerance",
        "frc": "intolérance"
    },
    {
        "espagnol": "make up one's mind:make a decision",
        "frc": " prendre une décision"
    },
    {
        "espagnol": "settle in:integrate into",
        "frc": "s'intégrer dans"
    },
    {
        "espagnol": "start from scratch:begin from the beginning",
        "frc": "commencer de zero:commencer de rien"
    },
    {
        "espagnol": "wish only the best for somebody",
        "frc": " souhaiter uniquement le meilleur pour quelqu'un"
    }
]}

function Start() {
    questionID = 0;
    LoadQuestion(3);
}

function LoadQuestion(_index){
    // if (_index >= voca.vocabulaire.length){
    //     alert("GG Vous avez terminer le quizz avec " + correctAnswer + " bonne reponse sur " + voca.vocabulaire.length);
    //     return;
    // }
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
        inputAnswer.value += " REPONSE : " + voca.vocabulaire[questionID].espagnol;
        
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

