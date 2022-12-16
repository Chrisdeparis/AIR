// Créez un programme qui transforme un tableau de chaînes de caractères en une seule chaîne de caractères. Espacés d’un séparateur donné en dernier argument au programme.
// Utilisez une fonction de ce genre (selon votre langage) :
// ma_fonction(array_de_strings, separateur) {
// 	# votre algorithme
// 	return (string)
// }
// Exemples d’utilisation :
// $> python exo.py “je” “teste” “des” “trucs” “ “
// Je teste des trucs

let args = process.argv.slice(2);
console.log(args);
let separateur = " ";
const ma_fonction = (array_de_strings, separator) => {
  let str = args.toString();
  let reg = /[^a-zA-Z]+/g;
  // enlever tous les autres caractères
  let check = str.replace(reg, separateur);
  console.log(check);
};
ma_fonction(args, separateur);
