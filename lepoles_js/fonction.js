function bonjour() {
  document.write("Bonjour le monde ! <br>");
}
document.write("<h1> Les fonctions </h1>");
// appel de la fonction bonjour
bonjour();
bonjour();

// déclaration d'une fonction avec des arguments
function salut(prenom) {
  document.write("<p>salut " + prenom + ",  bienvenue</p>");
}
// appel de la fonction salut
salut("Greg");
salut("Ilhem");
let prenom = "Sirine";
salut(prenom);

// déclaration d'une fonction avec plusieurs arguments
function phrase(mot1, mot2, mot3) {
  document.write(mot1 + " " + mot2 + " " + mot3);
}

let fin = "d'aller manger";
let debut = "Il est";
let milieu = "l'heure";
//EXO : utiliser la fonction phase et les variables fin, debut, milieu, pour afficher "Il est l'heure d'aller manger"

phrase(debut, milieu, fin);

/* EXO : appeler la fonction phrase pour afficher "on a faim" */
phrase(" on a faim", "", "");

function phrase2(mott1, mot2, mot3) {
  let str = mot1;
  if (mot2 != undefined) {
    str = str + " " + mot2;
  }
  if (mot3 != undefined) {
    //   str = str + " "+
    str = str + " " + mot3;
  }
  document.write(str + "<br>");
}
/*
 *Fonction qui retourne une valeur
 */
function nombreAuCarre(nb) {
  return nb * nb;
}
/*
    ● Pour qu'une fonction  retourne une valeur on utilise le mot-clé 'return'
    ● Après 'return' on peut mettre n'importe quelle expression 
    ● aucune instruction ne opeu être exécuté après l'instruction 'return'
    */

let resultat = nombreAuCarre(5);
document.write(" le carré de 7 est égal à " + nombreAuCarre(7)) + "<br>";

document.write("<p> Théorème de pythagore : </p>");
document.write(
  "Un triangle rectangle dont les côtés ontimeupdate, pour largeur, 2 et 5."
);
document.write("Le carré de l'hypothenuse de ce rectangle vaut");
document.write(nombreAuCarre(2) + nombreAuCarre(5));
document.write("<b>");
/* EXO : 1. Affichez la liste des carrés des nombres de 1 à 100
         2. Dans la fonction nombreAucarre, il faut verifier si le nb passé en argument est bien un nombre  */

for (let i = 1; i <= 100; i++) {
  document.write(i + "² =" + nombreAuCarre(i) + "<br>");
}
