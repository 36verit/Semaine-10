$bouton = document.getElementById("bouton");
$multiplicateur = document.getElementById("multiplicateur");
$buttonAutoclic = document.getElementById("buttonAutoclic");
$score = document.getElementById("score");
score = 0;
nbMultiplicateur = 1;

function afficherScore() {
    $score.innerHTML = "Score : " + score;
}

function afficherNbMultiplicateur() {
    $multiplicateur.innerHTML = "Multiplicateur x" + nbMultiplicateur + " (prix du prochain : " + prix() + ")";
}

function afficherPrixAutoclick(){
    $boutonAutoclic.innerHTML = "Acheter un autoclick pour " + prixAutoClick() + " cookies";
}

function clic() {
    score = score + nbMultiplicateur;
    afficherScore();
}

function prix() {
    return 20 * nbMultiplicateur * nbMultiplicateur;
}

function prixAutoClick(){
    return 100;
}

function acheterMultiplicateur() {
    if (score >= prix()) {
        score = score - prix();
        nbMultiplicateur = nbMultiplicateur + 1;
        afficherNbMultiplicateur();
        afficherScore();
    } else {
        alert("Votre score est insuffisant !");
    }
}

function acheterAutoclick() {
    if (score >= prixAutoClick()) {
        score = score - prixAutoClick();
        autoclicker();
    } else {
        alert("Votre nombre de cookies est insuffisant !");
    }
};

function autoclicker(){
     $stop = setInterval($button.onclick,1000);
 
}

$bouton.onclick = clic;
$multiplicateur.onclick = acheterMultiplicateur;
$buttonAutoclic.onclick = acheterAutoclick;
afficherScore();
afficherMultiplicateur();
afficherPrixAutoclick();

