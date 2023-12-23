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
            "frc": "Les besoins de la Grande-Bretagne"
        },
        {
            "Anglais": "Backlog",
            "frc": "arriéré"
        },
        {
            "espagnol": "labour shortage:need for workers",
            "frc": "Pénurie de main d'oeuvre"
        },
        {
            "espagnol": "raw material",
            "frc": " matière première"
        },
        {
            "espagnol": "Weakened economy",
            "frc": "Économie affaiblie"
        },
        {
            "espagnol": "Postwar",
            "frc": "Après-guerre"
        },
        {
            "espagnol": "Rebuild",
            "frc": "Reconstruire"
        },
        {
            "espagnol": "Welcome",
            "frc": "Acceuillir"
        },
        {
            "espagnol": "Reject:turn down",
            "frc": "Rejeter"
        },
        {
            "espagnol": "To fire",
            "frc": "Virer"
        },
        {
            "espagnol": "To cope with",
            "frc": "Faire face à"
        },
        {
            "espagnol": "Scandal",
            "frc": "Scandale"  
        },
        {
            "espagnol": "Usual environment",
            "frc": "Environnement habituel"
        },
        {
            "espagnol": "Devastating",
            "frc": "Dévastateur"
        },
        {
            "espagnol": "Hardworking",
            "frc": "Qui travaille dur"
        },
        {
            "espagnol": "Belong to",
            "frc": "Appartenir à"
        },
        {
            "espagnol": "Forced to",
            "frc": "Être forcé à"
        },
        {
            "espagnol": "Uprooted",
            "frc": "Déraciné"
        },
        {
            "espagnol": "Away from",
            "frc": "Loin de"
        },
        {
            "espagnol": "Have nothing but",
            "frc": "Ne rien avoir d'autre que"
        },
        {
            "espagnol": "Menial jobs:unskilled jobs",
            "frc": "Emplois non qualifiés"
        },
        {
            "espagnol": "Ashamed",
            "frc": "Honteux"
        },
        {
            "espagnol": "Crammed:full of people",
            "frc": "Bondé"
        },
        {
            "espagnol": "Foreign",
            "frc": "Étranger"
        },
        {
            "espagnol": "Disdain:despise",
            "frc": "Mépris"
        },
        {
            "espagnol": "Desperate to:determined to",
            "frc": "Être déterminé à"
        },
        {
            "espagnol": "(Go up/down) the social ladder",
            "frc": "(Monter/descendre) l'échelle sociale"
        },
        {
            "espagnol": "Odd jobs",
            "frc": "Petits boulots"
        },
        {
            "espagnol": "Overcome",
            "frc": "Surpasser"
        },
        {
            "espagnol": "To triumph over",
            "frc": "Triompher de"
        },
        {
            "espagnol": "Hurdles",
            "frc": "Obstacles"
        },
        {
            "espagnol": "Disdain:despise:scorn:look down on",
            "frc": "Mépriser"
        },
        {
            "espagnol": "Disdainful:scornful:despising",
            "frc": "Méprisant"
        },
        {
            "espagnol": "Make no fuss:go unnoticed",
            "frc": "Ne pas faire d'histoire:passé inapercus"
        },
        {
            "espagnol": "Expectation",
            "frc": "Attente"
        },
        {
            "espagnol": "Benefit from",
            "frc": "Bénéficier de"
        },
        {
            "espagnol": "Eldorado",
            "frc": "Eldorado"
        },
        {
            "espagnol": "Good housing",
            "frc": "Bon logement"
        },
        {
            "espagnol": "Mother country",
            "frc": "Mère patrie"
        },
        {
            "espagnol": "Identical right",
            "frc": "Droit identique"
        },
        {
            "espagnol": "Be entitled to:have the right to",
            "frc": "Avoir droit à"
        },
        {
            "espagnol": "Coming home",
            "frc": "Rentrer à la maison"
        },
        {
            "espagnol": "Homesick",
            "frc": "Mal du pays"
        },
        {
            "espagnol": "Hopeful",
            "frc": "Optimiste"
        },
        {
            "espagnol": "Pessimistic",
            "frc": "Pessimiste"
        },
        {
            "espagnol": "Independently recruited",
            "frc": "Recruté indépendamment"
        },
        {
            "espagnol": "Actively recruited",
            "frc": "Recruté activement"
        },
        {
            "espagnol": "Dread:fear",
            "frc": "Redouter"
        },
        {
            "espagnol": "Immigration removal centre",
            "frc": "Centre de rétention administratif"
        },
        {
            "espagnol": "Deportation",
            "frc": "Déportation"
        },
        {
            "espagnol": "Inclusion",
            "frc": "Inclusion"
        },
        {
            "espagnol": "Exclusion",
            "frc": "Exclusion"
        },
        {
            "espagnol": "Intolerance",
            "frc": "Intolérance"
        },
        {
            "espagnol": "Make up one's mind:make a decision",
            "frc": "Prendre une décision"
        },
        {
            "espagnol": "Settle in:integrate into",
            "frc": "S'intégrer dans"
        },
        {
            "espagnol": "Start from scratch:begin from the beginning",
            "frc": "Commencer de zero:commencer de rien"
        },
        {
            "espagnol": "Wish only the best for somebody",
            "frc": "Souhaiter uniquement le meilleur pour quelqu'un"
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

