// Exemples d’utilisation :
// $> python exo.py “Bonjour les gars”
// Bonjour
// les
// gars


function ma_fonction(string_a_couper, string_separateur) {
  // On vérifie que les deux arguments ne sont pas null
  if (string_a_couper === null || string_separateur === null) {
    console.log("Error: les deux arguments ne doivent pas être null");
    return;
  }

  // On vérifie que les deux arguments sont bien des chaînes de caractères
  if (
    typeof string_a_couper !== "string" ||
    typeof string_separateur !== "string"
  ) {
    console.log(
      "Error: les deux arguments doivent être des chaînes de caractères"
    );
    return;
  }

  // On initialise le tableau qui contiendra les morceaux de la chaîne
  const tableau = [];

  // On initialise une variable qui contiendra le morceau de chaîne en cours de traitement
  let morceau = "";

  // On parcourt la chaîne de caractères
  for (let i = 0; i < string_a_couper.length; i++) {
    // Si le caractère courant est un séparateur, on ajoute le morceau de chaîne
    // précédemment construit au tableau et on réinitialise la variable morceau
    if (string_separateur.includes(string_a_couper[i])) {
      tableau.push(morceau);
      morceau = "";
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
const string_separateur = " ";

// On appelle la fonction en utilisant les arguments récupérés
// On vérifie si le premier argument existe
if (string_a_couper) {
  // On appelle la fonction en utilisant les arguments récupérés
  console.log(ma_fonction(string_a_couper, string_separateur));
} else {
  console.log("Error: le premier argument est manquant");
}

