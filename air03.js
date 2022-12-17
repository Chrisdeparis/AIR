// Créez un programme qui transforme un tableau de chaînes de caractères en une seule chaîne de caractères. Espacés d’un séparateur donné en dernier argument au programme.
// Utilisez une fonction de ce genre (selon votre langage) :
// ma_fonction(array_de_strings, separateur) {
// 	# votre algorithme
// 	return (string)
// }
// Exemples d’utilisation :
// $> python exo.py “je” “teste” “des” “trucs” “ “
// Je teste des trucs

function ma_fonction(array_de_strings, separateur) {
  // On vérifie que array_de_strings est bien un tableau
  if (!Array.isArray(array_de_strings)) {
    console.log("Error: array_de_strings n'est pas un tableau");
    return;
  }

  // On vérifie que separateur est bien une chaîne de caractères
  if (typeof separateur !== 'string') {
    console.log("Error: separateur n'est pas une chaîne de caractères");
    return;
  }

  // Le reste de votre code ici...
  // On initialise la chaîne qui contiendra le résultat final
  let resultat = "";

  // On parcourt le tableau
  for (let i = 0; i < array_de_strings.length; i++) {
    // On ajoute la chaîne courante au résultat
    resultat += array_de_strings[i];

    // Si ce n'est pas le dernier élément du tableau, on ajoute le séparateur
    if (i < array_de_strings.length - 1) {
      resultat += separateur;
    }
  }

  // On retourne le résultat final
  return resultat;
}

// On récupère les arguments passés au programme
const array_de_strings = process.argv.slice(2, -1);
const separateur = process.argv.slice(-1)[0];

// On vérifie si aucun argument n'a été passé
if (!array_de_strings.length || !separateur) {
  console.log("Error: aucun argument n'a été passé au programme");
  return;
}

// On appelle la fonction en utilisant les arguments récupérés
console.log(ma_fonction(array_de_strings, separateur));
