
const questionText = document.getElementById("question-text");
const validButton = document.getElementById("valid-btn");
const answerButtons = document.querySelectorAll(".answer-btn");
const numberQuestion = document.getElementById("nb-question");


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

numberQuestion.textContent = (questionID+1) + "/" + data.questions.length;

for (let i = 0; i < answerButtons.length; i++) {
    const button = answerButtons[i];

    button.addEventListener('mouseover', () => {
        if (valided){
            return;
        }
        if(!button.classList.contains('selected')){
            button.style.backgroundColor = '#415A77';
            button.style.color = 'white';
        }
    });

    button.addEventListener('click', () => {
        if (valided){
            return;
        }
        if (button.classList.contains('selected')) {
            button.classList.remove('selected');
            button.style.backgroundColor = '#f1f2f0';
            button.style.color = 'black';
        } else {
            button.classList.add('selected');
            button.style.backgroundColor = '#778DA9';
            button.style.color = '';
        }
    });

    button.addEventListener('mouseout', () => {
        if (valided){
            return;
        }
        if(!button.classList.contains('selected')){
            button.style.backgroundColor = '#f1f2f0';
            button.style.color = '';
        }
    });
}

function Start() {
    questionID = 0;
    LoadQuestion(3);
}

function LoadQuestion(_index){
    if (_index >= data.questions.length){
        alert("GG Vous avez terminer le quizz avec " + correctAnswer + " bonne reponse sur " + data.questions.length);
        return;
    }
    numberQuestion.textContent = (questionID+1) + "/" + data.questions.length;
    btnSlected = [false,false,false,false];
    const currentQuestion = data.questions[_index];
    questionText.textContent = currentQuestion.question;
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove('selected');
        answerButtons[i].style.backgroundColor = '#f1f2f0';

        answerButtons[i].textContent = currentQuestion.options[i];
    }
}

function Valid(){
    if (!valided){
        ChekAnswers();
        valided = true;
        validButton.textContent = "Suivant";
    }else{
        validButton.textContent = "Valider";
        questionID += 1;
        LoadQuestion(questionID);
        valided = false;
    }
}


function Restart(){
    questionID = 0;
    numberQuestion.textContent = (questionID+1) + "/" + data.questions.length;
    LoadQuestion(questionID);
    valided = false;
}

function Skip(){
    questionID += 1;
    numberQuestion.textContent = (questionID+1) + "/" + data.questions.length;
    LoadQuestion(questionID);
    valided = false;
}

function ChekAnswers() {
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

