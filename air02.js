// Créez un programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.
// Votre programme devra intégrer une fonction prototypée comme ceci :
// ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
// 	# votre algorithme
// 	return (tableau)
// }
function ma_fonction(string_a_couper, string_separateur) {
  // On vérifie que les deux arguments sont bien des chaînes de caractères
  if (typeof string_a_couper !== 'string' || typeof string_separateur !== 'string') {
    console.log("Error: les deux arguments doivent être des chaînes de caractères");
    return;
  }

  // On vérifie que string_a_couper existe
  if (string_a_couper === null || string_a_couper === undefined) {
    console.log("Error: string_a_couper est null ou undefined");
    return;
  }

  // On initialise le tableau qui contiendra les morceaux de la chaîne
  const tableau = [];

  // On initialise une variable qui contiendra le morceau de chaîne en cours de traitement
  let morceau = "";

  // On parcourt la chaîne de caractères
  for (let i = 0; i < string_a_couper.length; i++) {
    // Si le caractère courant est le premier caractère du séparateur, on vérifie
    // si le séparateur suivant est bien présent à cet emplacement dans la chaîne
    if (string_a_couper[i] === string_separateur[0]) {
      let separateur_trouve = true;
      for (let j = 1; j < string_separateur.length; j++) {
        if (string_a_couper[i + j] !== string_separateur[j]) {
          separateur_trouve = false;
          break;
        }
      }
      if (separateur_trouve) {
        tableau.push(morceau);
        morceau = "";
        i += string_separateur.length - 1;
      } else {
        morceau += string_a_couper[i];
      }
    }
    // Sinon, on ajoute le caractère courant au morceau de chaîne en cours de traitement
    else {
      morceau += string_a_couper[i];
    }
  }

  // On ajoute le dernier morceau de chaîne au tableau (s'il existe)
  if (morceau) {
    tableau.push(morceau);
  }

  // On retourne le tableau
  return tableau.join('\n');
}

// On récupère les arguments passés au programme
const string_a_couper = process.argv.slice(2)[0];
const string_separateur = process.argv.slice(2)[1];

// Affiche: ['Crevette magique dans ', ' mer des étoiles']
if(string_a_couper === null || string_a_couper === undefined){
  console.error("Error: les deux arguments doivent être des chaînes de caractères");
} else {
// Exemple d'utilisation
console.log(ma_fonction(string_a_couper, string_separateur));
}