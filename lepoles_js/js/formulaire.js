/*
EXO : 1. Avec javascript, ajouter le texte 'formulaire de connexion' à la balise qui
        à l'ID résultat

      2. Changer la couleur de fond des balises <input>
*/
// Ajouter le texte 'formulaire de connexion' à la balise qui a l'ID 'resultat'
window.addEventListener("load", function () {
  document.getElementById("resultat").innerHTML =
    "<strong>Formulaire</strong> de <i>connexion</i>";
  this.document.querySelector("#resultat").innerHTML =
    "modifié avec querySelector";

  let input = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.backgroundColor = "#5ea9ce";
  }

  document.querySelectorAll("input").forEach(function (elementInput) {
    elementInput.style.border = "2px solid green";
  });

  document
    .querySelector("form")
    .addEventListener("submit", function (eventSubmit) {
      /* la méthode preventDefault() qui existe pour tout les objet de type évènements, permet d'annuler le comportement par défaut de l'evenement "submit" d'une balise <form> est d'envoyer le formulaire vers lURL défini dans 'action'.Donc si aucun url n'est défini dans action, la page est rechargée.
      
      uatre exemples: le comportement par defaut de l"évènement "click" sur une balise <a> est de rediriger vers la page définie dans 'href'*/
      eventSubmit.preventdefault();
      let texte = "";
      document.querySelectorAll("input").forEach(function (inputElement) {
        texte += inputElement.name + " = " + inputElement.value + "<br>";
      });
      console.log(texte);
      document.querySelector("#resultat").innerHTML = texte;
    });
});
