document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher le formulaire de se soumettre

    var password = document.getElementById("passwordInput").value;
    if (password === "110320") {
        // Redirection vers la page principale du site si le mot de passe est correct
        window.location.href = "menu.html";
    } else {
        // Affichage d'un message d'erreur si le mot de passe est incorrect
        alert("Mot de passe incorrect. Veuillez réessayer.");
    }
});
