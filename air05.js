// Exemples d’utilisation :
// $> python exo.py “Hello milady,   bien ou quoi ??”
// Helo milady, bien ou quoi ?

function retirerCaracteresAdjacents(chaine) {
    // On vérifie que chaine est bien une chaîne de caractères
    if (typeof chaine !== 'string') {
      console.log("Error: chaine n'est pas une chaîne de caractères");
      process.exit(1);
    }
  
    // On initialise la chaîne qui contiendra le résultat final
    let resultat = "";
  
    // On parcourt la chaîne
    for (let i = 0; i < chaine.length; i++) {
      // Si le caractère courant est différent du précédent, on l'ajoute au résultat
      if (chaine[i] !== chaine[i - 1]) {
        resultat += chaine[i];
      }
    }
  
    // On retourne le résultat final
    return resultat;
  }
  
  // On récupère la chaîne passée en argument
  const chaine = process.argv[2];
  
  // On appelle la fonction
  const resultat = retirerCaracteresAdjacents(chaine);
  
  // On affiche le résultat
  console.log(resultat);
  