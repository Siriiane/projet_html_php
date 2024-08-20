function tva(prix) {
  let resultat = prix * 0.2;
  return resultat;
}
let prix = 5;
let resultat = " peu importe";
console.log("tva(prix)", tva(prix));
console.log("prix", prix);
console.log("resultat", resultat);

function addition(nb) {
  console.log("addition nombre", nombre);
  return nombre + nb;
}

let calcul = addition(2);
console.log("calcul", calcul);
console.log("nombre", nombre);

let i = 99;
for (i = 0; i <= 10; i++){
    console.log(i);
   
}
console.log("valeur de i après la boucle" i);
i = 99
for (let i = 0; i < 10; i++) {
    console.log("2ème boucle" + i) 
}
 
 let maFoncton = function (texte) {
  document.write(texte + "<br>");
}

maFonction("Bonjour, nous sommes le jeudi");
maFonction("11 juillet 2024");

console.log("maFonction", typeof maFoncton);

let fonctionFlechee = (arg1) => {
  return arg1;
}