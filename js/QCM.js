// JavaScript pour activer le menu lors du survol
var menuList = document.getElementById("menuList");

function openMenu() {
    document.getElementById("menuList").style.display = "block";
}

function closeMenu() {
    document.getElementById("menuList").style.display = "none";
}

function toggleMenu() {
    var menuList = document.getElementById("menuList");
    if (menuList.style.display === "block") {
        menuList.style.display = "none";
    } else {
        menuList.style.display = "block";
    }
}
//apparaitre h1
document.addEventListener('DOMContentLoaded', function () {
    // Récupérer les balises h1
    const h1Elements = document.querySelectorAll('h1');

    // Ajouter la classe "show-title" à chaque balise h1
    h1Elements.forEach(function (h1) {
        h1.classList.add('show-title');
    });
});

//defilelement
document.addEventListener('DOMContentLoaded', function () {
    // Récupérer le formulaire
    const qcmForm = document.getElementById('qcmForm');

    // Ajouter la classe "show" au formulaire pour déclencher l'animation
    qcmForm.classList.add('show');
});


// JavaScript QCM
document.getElementById('qcmForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Récupère les réponses sélectionnées
    var responses = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value,
        q4: document.querySelector('input[name="q4"]:checked').value,
        q5: document.querySelector('input[name="q5"]:checked').value,
        q6: document.querySelector('input[name="q6"]:checked').value,
        q7: document.querySelector('input[name="q7"]:checked').value,
        q8: document.querySelector('input[name="q8"]:checked').value,
        q9: document.querySelector('input[name="q9"]:checked').value,
        q10: document.querySelector('input[name="q10"]:checked').value,
        q11: document.querySelector('input[name="q11"]:checked').value,
        q12: document.querySelector('input[name="q12"]:checked').value,
        q13: document.querySelector('input[name="q13"]:checked').value,
        q14: document.querySelector('input[name="q14"]:checked').value,
        q15: document.querySelector('input[name="q15"]:checked').value,
        q16: document.querySelector('input[name="q16"]:checked').value
    };

    // Convertit les réponses en chaîne de requête
    var queryString = Object.keys(responses).map(key => key + '=' + encodeURIComponent(responses[key])).join('&');

    // Redirige vers la page de récapitulation avec les réponses dans l'URL
    window.location.href = 'recapitulatif.html?' + queryString;
});

// JavaScript pour déclencher le fondu du titre h1
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner le titre h1
    const title = document.querySelector('h1');
    // Appliquer une opacité de 1 pour effectuer le fondu
    title.style.opacity = 1;
});
