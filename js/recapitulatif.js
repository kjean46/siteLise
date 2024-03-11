const urlParams = new URLSearchParams(window.location.search);
const reactionsDiv = document.getElementById('reactions');
const scoreDiv = document.getElementById('score');

// Crée une liste contenant toutes les questions
const questionList = [
    "Quelle est la tarte préférée de ton chéri ?",
    "Quel est le meilleur moyen de décourir une ville?",
    "Qui a la meilleure cuisine étrangère?",
    "Quelle serait la cuisson optimale de dudu lapin ?",
    "Je prends soin de pépépère ?",
    "Quel est mon jeu préféré ?",
    "Quel est mon sport favori ?",
    "Lise sans lunette est une doublure, elle n'est pas la même personne.",
    "Quel est mon dessert préféré parmis ces 3:",
    "Quel est mon fromage préféré parmis ces 3:",
    "Quel est mon groupe sanguin ?",
    "Comment j’envisage ma vie dans 10ans ? ",
    "Si je pouvais dîner avec une personnalité qui choisirais-je ?",
    "Comment est-ce que j'exprime le plus mon amour ?",
    "Où est-ce que je rêve de voyager ?",
    "Combien de temps m'a pris ce site ?"
];

const correctAnswers = {
    q1: "11",
    q2: "23",
    q3: "31",
    q4: "42",
    q5: "51",
    q6: "63",
    q7: "73",
    q8: "82",
    q9: "92",
    q10: "101",
    q11: "111",
    q12: "121",
    q13: "132",
    q14: "142",
    q15: "153",
    q16: "161"
};

const responses = [];
for (let i = 1; i <= 16; i++) {
    responses.push(urlParams.get('q' + i));
}

let score = 0;
for (let i = 1; i <= 16; i++) {
    if (responses[i - 1] === correctAnswers['q' + i]) {
        score++;
    }
}


// Affiche des réactions en fonction des réponses
const reactionTexts = {
    q1: {
        11: "✅Tarte aux citrons<br>C'est bien ! Tu sais quoi me faire mtn !",
        12: "❌Tarte aux quetsches<br>Mais ça va pas 😭",
        13: "❌Tarte aux pommes<br>J'adore aussi."
    },
    q2: {
        21: "❌En bus<br>Attrape touriste...",
        22: "❌En marchant lentement et peu<br>Non une ville c'est grand!",
        23: "✅En marchant viiite et beeeaucoup<br>C'est bien tu as compris !"
    },
    q3: {
        31: "✅Le lourd Vietnam<br>C'est bien ! Tu sais à nouveau quoi me faire mtn !",
        32: "❌Les obèses américains<br>Bon...",
        33: "❌Les frauduleux japonais<br>Bon..."
    },
    q4: {
        41: "❌Bleu<br>Pourquoi pas... mais non.",
        42: "✅A point<br>Oui il mérite cela.",
        43: "❌Saignant<br>Le pauvre en vrai... mais c'est la vie."
    },
    q5: {
        51: "✅OUI<br>Clairement il est heureux à chaque fois 🙂",
        52: "❌NON<br>MENSONGE !!!!!",
    },
    q6: {
        61: "❌Star Wars Battlefront II<br>J'avoue j'ai passé beaucoup de temps",
        62: "❌Zelda : Breath of the Wild<br>Excellent jeu mais non.",
        63: "✅Zelda : Twillight Princess<br>ENORME !!!"
    },
    q7: {
        71: "❌L'escalade<br>C'est sympa mais non !",
        72: "❌Le vélo<br>Pour le loisir mais non",
        73: "✅La natation<br>Oui !"
    },
    q8: {
        81: "❌OUI<br>Ah je le savais !!",
        82: "✅NON<br>Je reste sur mes gardes...",
    },
    q9: {
        91: "❌Le macaron<br>Très surcoté",
        92: "✅L'éclair<br>Tu sais quoi m'offrir !! Même si j'aime tout !",
        93: "❌Le chinois<br>Oui mais non 😂"
    },
    q10: {
        101: "✅Le Morbier<br>Après le Comté évidemment !",
        102: "❌Chaussé aux moines<br>J'aime mais c'est pas un vrai fromage",
        103: "❌Le Munster<br>J'adore aussi."
    },
    q11: {
        111: "✅A+<br>Bravo !",
        112: "❌A-<br>Tu multiplies par -1 et c'est juste",
        113: "❌AB<br>PAS DU TOUT"
    },
    q12: {
        121: "✅Avec toi<br>Evidemment ❤️",
        122: "❌PDG de Microsoft<br>Pourquoi pas !",
        123: "❌Président<br>Y'aurait des problèmes... "
    },
    q13: {
        131: "❌Mao Zedong<br>A faire en vrai",
        132: "✅Charles de Gaulle<br>Bravo ! Je suis sûr tu avais mis Napoléon au début !",
        133: "❌Napoléon<br>Même pas !"
    },
    q14: {
        141: "❌En embêtant doudou Lapin<br>Aussi clairement ! C'est que de l'amour !",
        142: "✅En te collant<br>Toujours ❤️",
        143: "❌En t'obligeant à marcher plus vite<br>Aussi !!"
    },
    q15: {
        151: "❌En Inde<br>Sans commentaire, ça pourrait déraper ",
        152: "❌Aux Etats-Unis<br>Aussi surcoté que le macaron mais un jour sûrement",
        153: "✅AU Vietnam<br>Avec toi évidemment et un interprète familial !!"
    },
    q16: {
        161: "✅Moins d'une semaine avec l'aide de M.GPT<br>Merci monsieur GPT !!!",
        162: "❌1 semaine sans M.GPT<br>Non, c'est pas mon domaine le web normalement !",
        163: "❌2 mois?!!!<br>Non, je suis plus déterminé !"
    }
};

// Affiche des images en fonction des réponses
const reactionImages = {
    q1: {
        11: "imQCM/faim.gif",
        12: "imQCM/NON.gif",
        13: "imQCM/pkPas.gif"
    },
    q2: {
        21: "imQCM/quoi.gif",
        22: "imQCM/NON.gif",
        23: "imQCM/fachee.gif"
    },
    q3: {
        31: "imQCM/pkPas.gif",
        32: "imQCM/quoi.gif",
        33: "imQCM/quoi.gif"
    },
    q4: {
        41: "imQCM/fachee.gif",
        42: "imQCM/fachee.gif",
        43: "imQCM/fachee.gif"
    },
    q5: {
        51: "imQCM/kiss.gif",
        52: "imQCM/quoi.gif"
    },
    q6: {
        61: "imQCM/gaming.gif",
        62: "imQCM/zelda.gif",
        63: "imQCM/gaming.gif"
    },
    q7: {
        71: "imQCM/pkPas.gif", 
        72: "imQCM/peur.gif",
        73: "imQCM/swim.gif"
    },
    q8: {
        81: "imQCM/lunettes.gif", 
        82: "imQCM/fachee.gif"
    },
    q9: {
        91: "imQCM/faim.gif",
        92: "imQCM/eat.gif", 
        93: "imQCM/faim.gif"
    },
    q10: {
        101: "imQCM/fromage.gif",
        102: "imQCM/faim.gif", 
        103: "imQCM/faim.gif"
    },
    q11: {
        111: "imQCM/peur.gif",
        112: "imQCM/peur.gif", 
        113: "imQCM/peur.gif"
    },
    q12: {
        121: "imQCM/love.gif",
        122: "imQCM/boss.gif",
        123: "imQCM/boss.gif"
    },
    q13: {
        131: "imQCM/quoi.gif",
        132: "imQCM/content.gif", 
        133: "imQCM/napoléon.png"
    },
    q14: {
        141: "imQCM/fachee.gif",
        142: "imQCM/hug.gif", 
        143: "imQCM/fachee.gif"
    },
    q15: {
        151: "imQCM/quoi.gif",
        152: "imQCM/moto.gif", 
        153: "imQCM/moto.gif"
    },
    q16: {
        161: "imQCM/ordi.gif",
        162: "imQCM/ordi.gif", 
        163: "imQCM/ordi.gif"
    }
};

// Affiche les réactions correspondant aux réponses pour toutes les questions
for (let i = 1; i <= 16; i++) {
    const questionKey = 'q' + i;
    if (i===16){
        reactionsDiv.innerHTML += `<h2>Question Bonus: ${questionList[i-1]} </h2>`;
    }else{
        reactionsDiv.innerHTML += `<h2>Question ${i}: ${questionList[i-1]} </h2>`; 
    }
    reactionsDiv.innerHTML += `<p>${reactionTexts[questionKey][responses[i - 1]]}</p>`;
    reactionsDiv.innerHTML += `<img src="${reactionImages[questionKey][responses[i - 1]]}" alt="Image ${i}">`;
}

// Affiche le score
scoreDiv.innerHTML = `<br>Ton score est de ${score} sur 15 !<br>`;

if (score >= 15) {
    scoreDiv.innerHTML += '<img src="imQCM/perfect.gif" alt="Parfait">'; // Pas besoin de la balise </p>
}


//defilelement
document.addEventListener('DOMContentLoaded', function () {
    // Récupérer le formulaire
    const reactionsD = document.getElementById('reactions');
    const scoreD = document.getElementById('reactions');

    // Ajouter la classe "show" au formulaire pour déclencher l'animation
    reactionsD.classList.add('show');
    scoreD.classList.add('show');
});
