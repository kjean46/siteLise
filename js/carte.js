function flipTile() {
    document.querySelector('.tile').classList.add('hover');
}

function unflipTile() {
    document.querySelector('.tile').classList.remove('hover');
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
