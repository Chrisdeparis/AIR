// Exemples d’utilisation :
// $> python exo.py “Hello milady,   bien ou quoi ??”
// Helo milady, bien ou quoi ?
const path = require("path");
const filename = path.basename(process.argv[1]);

function retirerCaracteresAdjacents(chaine) {
  // On vérifie que chaine est bien une chaîne de caractères
  if (filename !== "air14.js") {
    if (typeof chaine !== "string" || typeof chaine === undefined) {
      console.log("Error: chaine n'est pas une chaîne de caractères");
      process.exit(1);
    }
  }

  // On initialise la chaîne qui contiendra le résultat final
  let resultat = "";
  if (chaine === undefined) {
  } else {
    // On parcourt la chaîne
    for (let i = 0; i < chaine.length; i++) {
      // Si le caractère courant est différent du précédent, on l'ajoute au résultat
      if (chaine[i] !== chaine[i - 1]) {
        resultat += chaine[i];
      }
    }
  }

  // On retourne le résultat final
  return resultat;
}

// On récupère la chaîne passée en argument
const chaine = process.argv[2];

// On appelle la fonction
const resultat = retirerCaracteresAdjacents(chaine);

// if(filename !== 'air14.js'){

// }
// On affiche le résultat
console.log(resultat);

//exporter la fonction pour exo air14.js
module.exports = {
  "retirerCaracteresAdjacents": retirerCaracteresAdjacents,
};
