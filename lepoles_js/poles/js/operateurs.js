document.write("<h1>Opérateurs arithmétiques</h1>");

/* 
Les opérateurs arithmétiques sont :
    + addition
    - soustraction
    * multiplication
    / division
    % modulo (reste de la division entière)

Ces opérateurs s'utilisent avec des expressions de type
number
*/

let a = 5;
let b = 2;
document.write("5 + 2 = ");
document.write( a + b );
document.write("<br>");

let c = a * b;
document.write("la variable c vaut ");
document.write(c);
document.write("<br>");

c = a % b;
document.write("Le modulo de 5 par 2 vaut ");
document.write(c);
document.write("<br>");

document.write("Le modulo de 120 par 2 vaut ");
document.write(120 % 2);
document.write("<br>");

document.write("Le modulo de 93 par 3 vaut ");
document.write(93 % 3);
document.write("<br>");

document.write("<h1>Opérateur de concaténation</h1>");
document.write("<p>La concaténation consiste à coller une chaîne de caractères derrière une autre chaîne. </p> <p>L'opérateur est le caractère <code>+</code>.</p>");

let texte1 = "Bienvenue au ";
let texte2 = "PoleS Vitry";
document.write(texte1 + texte2 + "<br>");

let texte3 = a + " - " + b + " = " + (a - b);
document.write(texte3 + "<br>");

/* Exercice :
1. Déclarez les variables nb1 et nb2 avec les valeurs suivantes:
12 et 4

2. Affichez le résultat de toutes les opérations sous la forme : 
    • ... + ... = ...
    • ... - ... = ...
    • ... x ... = ...
    • ... / ... = ...


*/
document.write("5" + 5);
document.write("<br>");
document.write("5.2" * 5);

/* typeof est un opérateur qui permet de connaitre le type d'une expression
*/
document.write("<br>Le type de la variable a est " + typeof a + "<br>");

document.write(typeof "5.2");
document.write("<br>");

document.write(typeof ("5.2" * 1) );
document.write("<br>");

document.write("5.2" + 1 );
document.write("<br>");
document.write(typeof ("5.2" + 1) );
document.write("<br>");

document.write( parseFloat("5.2") + 1 );
document.write("<br>");
document.write(typeof parseFloat("5.2") );
document.write("<br>");



document.write("<br><br><br><br><br><br>");
