// Récupérer ID
var audioPlayer = document.getElementById('audioPlayer');
var overlay = document.getElementById('overlay');
var gif = document.getElementById('gif-image');
var backgroundImage = document.getElementById('backgroundImage');

// Fonction pour jouer ou mettre en pause la musique
function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play(); // Jouer la musique si elle est en pause
    document.getElementById('myBtn').textContent = 'Pause'; // Changer le texte du bouton en "Pause"
    overlayOn();
  } else {
    audioPlayer.pause(); // Mettre en pause la musique si elle est en cours de lecture
    document.getElementById('myBtn').textContent = 'Play'; // Changer le texte du bouton en "Play"
    overlayOff();
  }
}

// Écouter le clic sur le bouton de lecture/pause
document.getElementById('myBtn').addEventListener('click', togglePlayPause);

// Sélectionner la barre de progression
var seekBar = document.getElementById('seekBar');

// Mettre à jour la position de la barre de progression en fonction du temps de lecture de la musique
audioPlayer.addEventListener('timeupdate', function () {
  var currentTime = audioPlayer.currentTime;
  var duration = audioPlayer.duration;
  seekBar.value = (currentTime / duration) * 100;
});

// Mettre à jour le temps de lecture de la musique en fonction de la position de la barre de progression sélectionnée par l'utilisateur
seekBar.addEventListener('input', function () {
  var seekTime = (audioPlayer.duration * (seekBar.value / 100));
  audioPlayer.currentTime = seekTime;
});

function playMusic(musicSrc) {
  var audioPlayer = document.getElementById('audioPlayer');
  audioPlayer.src = musicSrc;
  audioPlayer.play(); // Lecture automatique de la nouvelle musique
  document.getElementById('myBtn').textContent = 'Pause'; // Changer le texte du bouton en "Pause"
  overlayOn();
}


// Ajoutez un écouteur d'événements pour détecter la fin de la musique
audioPlayer.addEventListener('ended', function () {
  // Par exemple, vous pouvez mettre à jour le texte du bouton
  document.getElementById('myBtn').textContent = 'Play';
  overlayOff();
});


function overlayOff() {
  overlay.style.display = 'none'; // Cacher l'overlay lorsque la musique est terminée
  gif.style.display = 'none';
  backgroundImage.style.display = 'none'; // Affiche l'image de fond
}
function overlayOn() {
  overlay.style.display = 'block'; // Cacher l'overlay lorsque la musique est terminée
  gif.style.display = 'inline-block';
  backgroundImage.style.display = 'block'; // Affiche l'image de fond
}



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

// JavaScript pour déclencher le fondu du titre h1
document.addEventListener('DOMContentLoaded', function () {
  // Sélectionner le titre h1
  const title = document.querySelector('h1');
  // Appliquer une opacité de 1 pour effectuer le fondu
  title.style.opacity = 1;
});

