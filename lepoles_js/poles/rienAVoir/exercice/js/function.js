/*
 NB :Pour les exercices demandant d'écrire une fonction, mettez ces fonctions dans un 
 	fichier functions.js et faites l'affichage dans un fichier html
 
4. Ecrire la fonction superieur(a, b)
		- Cette fonction retourne TRUE si a est supérieur à b sinon retourne FALSE
        Par exemple :
        superieur(46, 17) retourne TRUE
        superieur(17, 46) retourne FALSE
        superieur(17, 17) retourne FALSE



        
        En utilisant la fonction superieur(), comparez 2 variables (nb1 et nb2) 
        	et affichez :
            "nb1 est supérieur à nb2" ou "nb1 est inférieur à nb2" 
            (nb1 et nb2 doivent être remplacé par leur valeur)
    	Utilisez cette fonction avec les différentes valeurs suivantes
            nb1 = 15; 	nb2 = 7;
            nb1 = 52; 	nb2 = 324;
            nb1 = 9; 	nb2 = 10;
            nb1 = 4; 	nb2 = -52;
*/

let couples = [
  [15, 7],
  [52, 324],
  [9, 10],
  [4, -52],
];
for (let i = 0; i < couples.length; i++) {
  nb1 = couples[i][0];
  nb2 = couples[i][1];
  if (superieur(nb1, nb2)) {
    document.write(nb1 + " est superieur à" + nb2);
  } else {
    document.write(nb1 + " est inférieur ou égal à" + nb2);
  }
  document.write("<br>");
}

// function superieur(a, b) {
//     return a > b;
//     let nb1 = 7, nb2 = 15;
//     if( superieur )}
/*      
5. Ecrire la fonction plusgrand(a, b)
    - Cette fonction retourne le plus grand des 2 nombres passés en paramètres
        Par exemple :
        plusGrand(46, 17) retourne 46
        plusGrand(17, 46) retourne 46
        plusGrand(17, 17) retourne 17
    - Utilisez cette fonction avec les différentes valeurs suivantes :
            nb1 = 15; 	nb2 = 7;
            nb1 = 52; 	nb2 = 324;
            nb1 = 4; 	nb2 = -52;
            nb1 = 9; 	nb2 = 10;
            */
function plusGrand(a, b) {
  //     if (a > b) {
  //     return a;
  // }
  //     return b;
  return a > b ? a : b;
}

/*
6. Ecrire la fonction derniereValeur($tableau)
	- Cette fonction retourne la dernière valeur d'un tableau
        Par exemple :
        nombres = [ 15, 7, 52, 324, 4, -52, 9, 10 ];
        derniereValeur($nombres) retourne 10
        
	- Utilisez pour afficher :
		La dernière valeur du tableau <i>nomDuTableau</i> est ...
      avec les variables suivantes :
       	valeurs = [ 4, "32", 65.2, "fin"];
        jours = ["lundi", "mardi", "mercredi", "jeudi", "samedi", "dimanche"];     
      */
function derniereValeur(t) {
  let dernierIndice = t.length - 1;
  return t[dernierIndice];
}
/* 
7. Ecrire la fonction plusPetit($tableau)
	- Cette fonction retourne la plus petite valeur d'un tableau.
        Il faut trouver comment garder en mémoire l'élement le plus petit 
        d'un tableau de nombres lors du parcours des valeurs du tableau.
        	Indice : utiliser une variable plusPetiteValeur qui contiendra 
            		la plus petite valeur à comparer avec les autres valeurs 
                    du tableau.
        			Il faut parcourir tout le tableau et comparer chaque valeur 
                    avec plusPetiteValeur. 
                    Si la valeur comparée est plus petite que la valeur de
                    plusPetiteValeur, alors vous affectez cette valeur du
        			tableau à la variable plusPetiteValeur.
        			Quand on a fini de parcourir le tableau, plusPetiteValeur 
                    est égal à la plus petite valeur du tableau. 
                    La fonction retourne la variable plusPetiteValeur.
       				Vous devez trouver quelle valeur doit avoir $plusPetiteValeur 
                    au départ.
                    
                    */
function plusPetit(t) {
  let plusPetiteValeur = t[0];
  for (let i = 1; i < t.length; i++) {
    if (plusPetiteValeur > t[i]) {
      plusPetiteValeur = t[i];
    }
  }
  return plusPetiteValeur;
}

/*
	- Utilisez cette fonction avec les tableaux suivants :
        nombres = [ 15, 7, 52, 324, 4, -52, 9, 10 ];
        notes = [ 12, 17, 4, 15, 20, 5 ];
		
      Vous devrez afficher toutes les valeurs du tableau et la plus petite valeur 
      grâce à la fonction plusPetit()
        ex :
        La plus petite valeur du tableau [ 15, 7, 52, 324, 4, -52, 9, 10 ] est -52
        La plus petite valeur du tableau [ 12, 17, 4, 15, 20, 5 ] est 4
*/
