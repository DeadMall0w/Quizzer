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
        "frc": "Britain's need",
        "espagnol": " Besoin de la Grande-Bretagne"
    },
    {
        "frc": "backlog",
        "espagnol": "arriéré"
    },
    {
        "frc": "labour shortage:need for workers",
        "espagnol": "pénurie de main d'oeuvre"
    },
    {
        "frc": "raw materials",
        "espagnol": " matière première"
    },
    {
        "frc": "weakened economy",
        "espagnol": " économie affaiblie"
    },
    {
        "frc": "postwar",
        "espagnol": " après guerre"
    },
    {
        "frc": "rebuild",
        "espagnol": " reconstruire"
    },
    {
        "frc": "welcome",
        "espagnol": " acceuillir"
    },
    {
        "frc": "reject:turn down",
        "espagnol": " rejeter"
    },
    {
        "frc": "to fire",
        "espagnol": " virer"
    },
    {
        "frc": "to cope with",
        "espagnol": " faire face à"
    },
    {
        "frc": "scandal",
        "espagnol": " scandale"
    },
    {
        "frc": "usual environment",
        "espagnol": " environment habituelle"
    },
    {
        "frc": "devastating",
        "espagnol": " devastateur"
    },
    {
        "frc": "hardworking",
        "espagnol": " qui travail dur"
    },
    {
        "frc": "belong to",
        "espagnol": " appartenir à"
    },
    {
        "frc": "forced to",
        "espagnol": " être forcé à"
    },
    {
        "frc": "uprooted",
        "espagnol": " déraciné"
    },
    {
        "frc": "away from",
        "espagnol": "loin de"
    },
    {
        "frc": "have nothing but",
        "espagnol": " ne rien avoir d'autre que"
    },
    {
        "frc": "menial jobs:unskilled jobs",
        "espagnol": " emplois non qualifié"
    },
    {
        "frc": "ashamed",
        "espagnol": " honteux"
    },
    {
        "frc": "crammed:full of people",
        "espagnol": " bondé"
    },
    {
        "frc": "foreign",
        "espagnol": "étranger"
    },
    {
        "frc": "disdain:despise",
        "espagnol": "mépris"
    },
    {
        "frc": "desperate to:determined to",
        "espagnol": " être déterminé à"
    },
    {
        "frc": "go up/down the social ladder",
        "espagnol": " monter/descendre l'echelle sociale"
    },
    {
        "frc": "odd jobs",
        "espagnol": "petit boulots"
    },
    {
        "frc": "overcome",
        "espagnol": "surpasser"
    },
    {
        "frc": "to triumph over",
        "espagnol": "triompher de"
    },
    {
        "frc": "hurdles",
        "espagnol": "obstacles"
    },
    {
        "frc": "disdain:despise:scorn:look down on",
        "espagnol": " mépriser"
    },
    {
        "frc": "disdainful:scornful:despising",
        "espagnol": "méprisant"
    },
    {
        "frc": "make no fuss:go unnoticed",
        "espagnol": " ne pas faire d'histoire:passé inapercus"
    },
    {
        "frc": "expectation",
        "espagnol": " attente"
    },
    {
        "frc": "benefit from",
        "espagnol": " bénéficier de"
    },
    {
        "frc": "Eldorado",
        "espagnol": "Eldorado"
    },
    {
        "frc": "good housing",
        "espagnol": " bon logement"
    },
    {
        "frc": "mother country",
        "espagnol": " mère patrie"
    },
    {
        "frc": "identical right",
        "espagnol": "droit identique"
    },
    {
        "frc": "be entitled to:have the right to",
        "espagnol": " avoir droit à"
    },
    {
        "frc": "coming home",
        "espagnol": " revenir à la maison"
    },
    {
        "frc": "homesick",
        "espagnol": "mal du pays"
    },
    {
        "frc": "hopeful",
        "espagnol": " optimiste"
    },
    {
        "frc": "pessimistic",
        "espagnol": "pessimiste"
    },
    {
        "frc": "independently recruited",
        "espagnol": "recruté indépendamment"
    },
    {
        "frc": "actively recruited",
        "espagnol": " recruté activement"
    },
    {
        "frc": "dread:fear",
        "espagnol": "redouter"
    },
    {
        "frc": "immigratopn removal centre",
        "espagnol": "centre de rétention administratif"
    },
    {
        "frc": "deportation",
        "espagnol": " deportation"
    },
    {
        "frc": "inclusion",
        "espagnol": "inclusion"
    },
    {
        "frc": "exclusion",
        "espagnol": "exclusion"
    },
    {
        "frc": "intolerance",
        "espagnol": "intolérance"
    },
    {
        "frc": "make up one's mind:make a decision",
        "espagnol": " prendre une décision"
    },
    {
        "frc": "settle in:integrate into",
        "espagnol": "s'intégrer dans"
    },
    {
        "frc": "start from scratch:begin from the beginning",
        "espagnol": "commencer de zero:commencer de rien"
    },
    {
        "frc": "wish only the best for somebody",
        "espagnol": " souhaiter uniquement le meilleur pour quelqu'un"
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

