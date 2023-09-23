document.addEventListener('DOMContentLoaded', function() {
    // Votre code JavaScript ici, y compris la gestion de l'événement "keydown"
    const inputElement = document.getElementById('text-areat');
  
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
const reponseText = document.getElementById('reponse-text');
const textarea = document.getElementById('text-area');

let questionID = 0;
let valided = false;
let btnSlected = [false,false,false,false];
let correctAnswer = 0;
//* 10, 15, 

const questions = {
  "questions": [
    {
      "question": "Quelles énergies fossiles ont été largement utilisées au XXe siècle ?",
      "réponse": "Les énergies fossiles largement utilisées au XXe siècle comprennent le charbon, le pétrole et l'uranium. Ces sources d'énergie ont joué un rôle clé dans l'industrialisation et le développement économique de cette période."
    },
    {
      "question": "Quelle crise économique majeure a débuté en 1929 ?",
      "réponse": "Un krach boursier. C'était l'une des pires crises économiques de l'histoire mondiale."
    },
    {
      "question": "Quelle est la principale cause de la crise de 1929 ?",
      "réponse": "La principale cause de la crise de 1929 était le krach boursier qui a résulté de la perte de confiance des investisseurs dans le marché boursier, déclenchant ainsi une cascade de conséquences économiques et sociales."
    },
    {
      "question": "Quelle est l'origine de la crise de 1929 en lien avec les prêts des États-Unis ?",
      "réponse": "L'origine de la crise de 1929 remonte aux prêts massifs accordés par les États-Unis aux pays alliés après la Première Guerre mondiale. Ces prêts étaient remboursés en or, créant une confiance excessive dans le dollar américain, mais finissant par provoquer un déséquilibre économique."
    },
    {
      "question": "Quelle est la conséquence économique majeure de la crise de 1929 ?",
      "réponse": "La conséquence économique majeure de la crise de 1929 fut le chômage massif, touchant plus de 30 % de la population américaine et provoquant une détresse économique généralisée."
    },
    {
      "question": "Qu'est-ce que le 'fordisme' ?",
      "réponse": "Le 'fordisme' désigne un système de production développé par Henry Ford, caractérisé par le travail à la chaîne. Il a permis une augmentation de l'efficacité de la production et a contribué à la baisse des prix des biens de consommation."
    },
    {
      "question": "Quelle est la signification de l'indice Dow Jones pendant la crise de 1929 ?",
      "réponse": "Pendant la crise de 1929, l'indice Dow Jones a montré que les valeurs boursières étaient de plus en plus déconnectées de la réalité économique, ce qui a alimenté la spéculation excessive et le krach boursier."
    },
    {
      "question": "Quel événement a déclenché le krach boursier de 1929, également connu sous le nom de 'Jeudi Noir' ?",
      "réponse": "Le krach boursier de 1929, surnommé le 'Jeudi Noir', a été déclenché par la vente massive d'actions par un grand actionnaire, semant la panique parmi les investisseurs."
    },
    {
      "question": "Quel effet la crise de 1929 a-t-elle eu sur l'action Ford ?",
      "réponse": "Suite à la crise de 1929, l'action de la Ford Motor Company est devenue quasiment sans valeur, entraînant une perte massive d'emplois dans l'industrie automobile."
    },
    {
      "question": "Quels événements sont racontés dans le livre 'Les Raisins de la Colère' et la photographie 'Mother Migrant' ?",
      "réponse": "'Les Raisins de la Colère' de John Steinbeck et la photographie 'Mother Migrant' de Dorothea Lange relatent les souffrances des familles de fermiers pendant la crise économique, illustrant ainsi les réalités sociales de l'époque."
    },
    {
      "question": "Quelle proportion de la population américaine a perdu son emploi pendant la crise de 1929 ?",
      "réponse": "Plus de 30 % de la population américaine a perdu son emploi pendant la crise de 1929, entraînant une détresse économique généralisée."
    },
    {
      "question": "Quel groupe a pris de l'ampleur pendant la crise de 1929, en particulier aux États-Unis ?",
      "réponse": "Le Ku Klux Klan a pris de l'ampleur pendant la crise de 1929, profitant des tensions sociales et économiques pour accroître son influence."
    },
    {
      "question": "Quelles conséquences la crise de 1929 a-t-elle eu sur le Royaume-Uni ?",
      "réponse": "Le Royaume-Uni a été durement touché par la crise de 1929, avec des conséquences telles que le chômage et des difficultés financières similaires à celles des États-Unis."
    },
    {
      "question": "Pourquoi la crise a-t-elle été plus violente en Allemagne ?",
      "réponse": "La crise a été plus violente en Allemagne en raison de son industrialisation importante, de sa dépendance à l'égard de la finance américaine et de son faible stock d'or, ce qui a affaibli sa monnaie, le deutschmark."
    },
    {
      "question": "Quelle expression a fait son apparition en Europe en raison de la crise de 1929 ?",
      "réponse": "L'expression 'chômage de masse' a fait son apparition en Europe en raison de la crise de 1929, décrivant la montée du chômage à grande échelle."
    },
    {
      "question": "Comment certains pays ont-ils réagi à la baisse du commerce mondial pendant la crise ?",
      "réponse": "Certains pays ont réagi en s'appuyant sur leurs colonies pour maintenir leurs économies, tandis que d'autres ont vu leurs exportations diminuer en raison de crises économiques et sociales, notamment des coups d'État militaires en Amérique latine."
    },
    {
      "question": "Quel programme économique a été introduit aux États-Unis pour faire face à la crise de 1929 ?",
      "réponse": "Aux États-Unis, le président Franklin D. Roosevelt a introduit le 'New Deal', un ensemble de réformes et de politiques visant à stimuler l'économie et à aider les Américains à sortir de la crise économique."
    },
    {
      "question": "Quelle est la principale idée derrière le 'New Deal' de Roosevelt ?",
      "réponse": "La principale idée derrière le 'New Deal' de Roosevelt était l'intervention active de l'État dans l'économie pour éviter l'effondrement de la démocratie et pour stimuler la croissance économique."
    },
    {
      "question": "Quels types de projets étaient financés par le 'New Deal' ?",
      "réponse": "Le 'New Deal' a financé des projets de grands travaux tels que la construction de barrages et d'autoroutes, créant ainsi des emplois et stimulant l'économie."
    },
    {
      "question": "Comment le 'New Deal' a-t-il taxé les plus riches aux États-Unis ?",
      "réponse": "Le 'New Deal' a imposé un taux d'imposition élevé, atteignant parfois 90 %, sur les revenus les plus élevés, dans le but de financer les programmes et les réformes sociales."
    },
    {
      "question": "Comment certains pays ont-ils lutté contre le chômage pendant les années 1930 ?",
      "réponse": "Dans certains pays comme l'Allemagne, le travail a été rendu obligatoire, souvent avec des salaires très bas ou inexistants. Cela a réduit le chômage, mais au prix de conditions de travail difficiles."
    },
    {
      "question": "Qu'est-ce que l'isolationnisme en matière de commerce international ?",
      "réponse": "L'isolationnisme en matière de commerce international consiste à limiter les échanges commerciaux avec d'autres pays, dans le but de protéger les emplois nationaux et de maintenir des prix plus élevés."
    },
    {
      "question": "Quelle agence a été créée pour contrôler les activités financières aux États-Unis ?",
      "réponse": "Aux États-Unis, l'US Securities and Exchange Commission (SEC) a été créée pour réglementer les activités financières et renforcer la confiance dans les marchés."
    },
    {
      "question": "Quelle mesure l'US SEC a-t-elle prise pour contrôler les banques de dépôts ?",
      "réponse": "L'US SEC a interdit aux banques de dépôts de placer l'épargne de leurs clients sur le marché boursier sans l'accord explicite de ces derniers, renforçant ainsi la protection des investisseurs."
    },
    {
      "question": "Quel était l'objectif des démocrates en rattachant le dollar au stock d'or ?",
      "réponse": "L'objectif des démocrates en rattachant le dollar au stock d'or était de stabiliser la monnaie et de restaurer la confiance dans le système financier, ce qui contribuerait à la relance de l'emploi et du marché intérieur."
    },
    {
      "question": "Quelles solutions autoritaires ont été adoptées par certains pays en réponse à la crise des années 1930 ?",
      "réponse": "En réponse à la crise des années 1930, des pays tels que l'Allemagne, l'Italie et le Japon ont adopté des solutions autoritaires, menant à des régimes totalitaires, chacun avec ses propres caractéristiques et conséquences."
    },
    {
      "question": "Quel parti politique français a remporté les élections de 1936 ?",
      "réponse": "Le Front Populaire, une coalition de partis de gauche comprenant les communistes, les socialistes et les radicaux, a remporté les élections de 1936 en France."
    },
    {
      "question": "Quelles réformes importantes ont été mises en place par le Front Populaire en France ?",
      "réponse": "Le Front Populaire a mis en place d'importantes réformes sociales en France, notamment la réduction du temps de travail de 48 à 40 heures, l'octroi de deux semaines de congés payés pour les travailleurs, et l'introduction des conventions collectives."
    },
    {
      "question": "Quel était l'objectif du Front Populaire en introduisant des secrétaires d'État femmes au parlement ?",
      "réponse": "Le Front Populaire avait pour objectif d'encourager l'égalité des sexes en politique en introduisant des secrétaires d'État femmes au parlement, même si elles n'avaient pas encore le droit de vote à cette époque."
    },
    {
      "question": "Quel groupe paramilitaire était associé au parti nazi en Allemagne ?",
      "réponse": "En Allemagne, le parti nazi était associé à des groupes paramilitaires tels que les SA (Sturmabteilung) et plus tard les SS (Schutzstaffel), qui jouaient un rôle clé dans la mise en œuvre de la politique nazie."
    },
    {
      "question": "Quel célèbre styliste allemand s'occupait des costumes des nazis ?",
      "réponse": "Le célèbre styliste allemand Hugo Boss s'occupait de la conception des uniformes et des costumes des nazis pendant la période du Troisième Reich."
    },
    {
      "question": "Quelle stratégie d'armement l'Allemagne nazie a-t-elle mise en place dès 1934 ?",
      "réponse": "Dès 1934, l'Allemagne nazie a lancé une production industrielle intensive d'armement en prévision de futures invasions et de la conquête de territoires voisins."
    },
    {
      "question": "Quelle était l'objectif de l'Allemagne nazie en envahissant d'autres pays ?",
      "réponse": "L'objectif de l'Allemagne nazie en envahissant d'autres pays était de piller leurs ressources et territoires afin de soutenir son expansion impérialiste et ses ambitions militaires."
    }
    // Continuez avec les autres questions et réponses détaillées.
  ]
}


function Start() {
    questionID = 0;
    LoadQuestion(3);
}

function LoadQuestion(_index){
    if (_index >= questions.questions.length){
        alert("Vous avez terminer le quiz, appuyer sur recommencer");
        return;
    }
    numberQuestion.textContent = (questionID+1) + "/" + questions.questions.length;
    questionText.textContent = questions.questions[questionID].question;
}

function Valid(){
    if (!valided){
        ShowAnswer();
        valided = true;
        validButton.textContent = "Suivant";
    }else{
        textarea.value = "";
        AjusterHauteur();
        validButton.textContent = "Valider";
        reponseText.textContent = "";
        questionID += 1;
        LoadQuestion(questionID);
        valided = false;
    }
}

function AjusterHauteur(){
  textarea.style.height = 'auto';
  textarea.style.height = (textarea.scrollHeight) + 'px';
}


function Restart(){
    questionID = 0;
    correctAnswer = 0;
    LoadQuestion(questionID);
    valided = false;
}

function Skip(){
    questionID += 1;
    LoadQuestion(questionID);
    ShowAnswer();
    valided = false;
    textarea.value = "";
}

function ShowAnswer(){
  reponseText.textContent = questions.questions[questionID].réponse;
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

