// document.write("<h1> Opérateur arithmétiques");

/*
Les opérateurs arithmétiques sont :
+addition
-soustraction
*multiplication
/division
% modulo (reste de la division entière)
Ces opérateurs s'utilisent avec des expressions de tyope number
*/

// let a = 5;
// let b = 2;
// document.write("5 + 2 =");
// document.write(a + b);
// document.write("<br>");

// let c = a * b;
// document.write("la variable c'est vaut");
// document.write(c);
// document.write("<br>");

// document.write("Le modulo de 93 par 3 vaut");
// document.write(93 % 3);
// document.write("<br>");

// document.write("<h1> Opérateur de concaténation</h1>");
// document.write(
//   "<p> La concaténation consiste à coller une chîne de caractère derrière une autre chaîne </p> <p>L'opérateur est lecaractère <code>+</code>.</p>"
// );

// let texte1 = "bienvenue au";
// let texte2 = "PoleS Vitry";
// document.write(texte1 + texte2 + "<br>");

// let texte3 = a + " - " + b + "=" + a - b;
// document.write(texte3 + "<br>");

// document.write("<br><br><br><br><br><br>");

/* Exercice :
1. Déclarez les variables nb1 et nb2 avec les valeurs suivantes:
12 et 4

2. Affichez le résultat de toutes les opérations sous la forme : 
    • ... + ... = ...
    • ... - ... = ...
    • ... x ... = ...
    • ... / ... = ...
    */

// let nb1 = 12;
// let nb2 = 4;
// var addition = nb1 + nb2;
// var soustraction = document.write("12 + 4=");
// document.write(nb1 + nb2);
// document.write("<br>");

// document.write("12 - 4=");
// document.write(nb1 - nb2);
// document.write("<br>");
// document.write("12 * 4=");
// document.write(nb1 * nb2);
// document.write("<br>");

// document.write("12 / 4=");
// document.write(nb1 / nb2);
// document.write("<br>");

/* typeof est un opérateur qui permet de connaitre le type d'une expression */

// document.write("<br>Le type de la variable a est " + typeof a + "<br>");

// document.write(typeof "5.2");
// document.write("<br>");

// document.write(typeof ("5.2" + 1));
// document.write("<br");

// document.write("<br><br><br><br><br><br>");
/* 
        La structure conditionnelle IF permet d'exécuter du code si une condition est vraie.
        Si la condition est fausse, ce code ne sera pas exécuté.
        SYNTAXE : 
        if (condition) {
            ...bloc d'instructions...
        }
        'condition' est une expression de type booléen.
        'bloc d'instructions' est une suite de lignes de code.
        */

// Vérifie si le nombre est supérieur à 10
// if (nb > 10) {
//   document.write("<p>Vous avez plus que la moyenne</p>");
// } else if (nb == 10) {
//   document.write("<p>" + nb + ": vous avez la moyenne</p>");
// } else {
//   document.write("<p>" + nb + ":Vous n'avez pas la moyenne");
// }
// //
// let age = 30;
// let texte;
// if (age < 18) {
//   texte = " vous êtes mineur";
// } else if (age < 60) {
//   texte = "vous êtes adulte";
// } else {
//   texte = "Vous êtes retraité";
// }
// document.write("<p>" + texte + "</p>");

var num1 = 1;

let nbTape = prompt("Tapez un nombre entre 1 et 10:");
let nbAtrouver = 3;
if (nbTape >= 1 && nbTape <= 10) {
  if (nbTape == nbAtrouver) {
    document.write(nbTape + " : vous avez gagné ! <b>");
  }
}
