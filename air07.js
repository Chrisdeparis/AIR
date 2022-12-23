// Exemples d’utilisation :
// $> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “t”
// Michel

// $> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “a”
// Michel, Thérèse, Benoit


function ma_fonction(array_de_strings, string) {
  // Vérifier si array_de_strings est bien un tableau de chaînes de caractères
  if (!Array.isArray(array_de_strings) || !array_de_strings.every(e => typeof e === 'string')) {
    console.error('Le premier argument doit être un tableau de chaînes de caractères');
    process.exit(1); // Quitter le programme avec une erreur
  }

  // Vérifier si string est bien une chaîne de caractères
  if (typeof string !== 'string') {
    console.error('Le second argument doit être une chaîne de caractères');
    process.exit(1); // Quitter le programme avec une erreur
  }

  // Créer le nouveau tableau de chaînes de caractères qui ne contiennent pas string
  const nouvel_array_de_strings = array_de_strings.filter(e => !e.toLowerCase().includes(string.toLowerCase()));

  return nouvel_array_de_strings.join(', ');
}

// Lire les arguments passés en ligne de commande
const array_de_strings = process.argv.slice(2, -1);
const string = process.argv[process.argv.length - 1];

// Appeler la fonction avec les arguments lus en ligne de commande
const resultat = ma_fonction(array_de_strings, string);


// Vérifier si tous les arguments nécessaires ont été fournis
if (array_de_strings.length === 0 || !string) {
  console.error('Il manque des arguments');
  process.exit(1); // Quitter le programme avec une erreur
} else {
  console.log(resultat);
}