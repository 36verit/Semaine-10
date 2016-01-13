 var bouton = document.getElementById("bouton");
 var multiplicateur = document.querySelector("#multiplicateur");
 var boutonAutoclic = document.getElementById("boutonAutoclic");
 var score = document.getElementById("score");

 var nbMultiplicateur = 1;
 var prix = 80;
 
 var elementScore = 0;
 
 
 function afficherScore() {
     score.innerHTML = "score : " + elementScore;
 }
 
 function afficherMultiplicateur() {
    multiplicateur.innerHTML = "Multiplicateur x" + nbMultiplicateur + " (prix du prochain : " + prix + ")";
  
 }
 
 function afficherPrixAutoclick(){
     boutonAutoclic.innerHTML = "Acheter un autoclick pour 1000 cookies";
 }
 
 function clic() {
     elementScore += nbMultiplicateur;
     afficherScore();
 }
 

 function acheterMultiplicateur() {
     if (elementScore >= prix ){
        elementScore -= prix;
        nbMultiplicateur += 1;
    } else {
        alert("Votre score est insuffisant !");
    }
    prix = 80*nbMultiplicateur;
    afficherMultiplicateur();
 }
 
 function autoClicker() {
     if (elementScore >= 1000 ){
        elementScore -= prix;
        setInterval (clic, 1000);  
        afficherScore();
    } else {
        alert("Votre score est insuffisant !");
    }
 }
 
 


 
 
 bouton.onclick = clic;
 multiplicateur.onclick = acheterMultiplicateur;
 boutonAutoclic.onclick = autoClicker ;
 afficherScore();
 afficherMultiplicateur();
 afficherPrixAutoclick();
