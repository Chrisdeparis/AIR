// Exemples d’utilisation :
// $> python exo.py 1 2 3 4 5 4 3 2 1
// 5

// $> python exo.py bonjour monsieur bonjour
// monsieur


const path = require("path");

function trouverValeurImpaire(liste) {
  // On vérifie que la liste est bien un tableau
  if (!Array.isArray(liste)) {
    console.log("Error: la valeur passée en argument n'est pas un tableau");
    process.exit(1);
  }

  // On crée un dictionnaire qui va compter le nombre d'occurrences de chaque élément de la liste
  const compte = {};
  for (const valeur of liste) {
    if (valeur in compte) {
      compte[valeur]++;
    } else {
      compte[valeur] = 1;
    }
  }

  // On parcourt le dictionnaire pour trouver la valeur qui n'a pas de paire
  for (const valeur in compte) {
    if (compte[valeur] % 2 === 1) {
      return valeur;
    }
  }

  // Si aucune valeur n'a été trouvée, on retourne null
  return null;
}

// On récupère la liste passée en argument
const liste = process.argv.slice(2);

// On appelle la fonction
const resultat = trouverValeurImpaire(liste);
const filename = path.basename(process.argv[1]);
// On affiche le résultat
if(filename !== 'air14.js'){
  if (resultat === null) {
    console.log("Aucune valeur n'a été trouvée");
  } else {
    console.log(resultat);
  }
}


//exporter la fonction pour exo air14.js
module.exports = {
  "trouverValeurImpaire": trouverValeurImpaire,
};