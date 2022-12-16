// Créez un programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.
// Votre programme devra intégrer une fonction prototypée comme ceci :
// ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
// 	# votre algorithme
// 	return (tableau)
// }
let args = process.argv.slice(2);

<<<<<<< HEAD
=======
function my_split(sentence, separator) {
  return sentence.split(separator);
}


const errorMessage = new Error('error');

function areThereExactlyTwoArguments(args) {
  return args.length == 2;
}


function checkArgumentForError(args) {
  let testResult = 1;
  if (!areThereExactlyTwoArguments(args)) {
    //1.a if not exatly two arguments are passed
    testResult = errorMessage;
  }
  return testResult;
}

// let args = process.argv.slice(2);
// console.log(args.length);
let checkResult = checkArgumentForError(args);
let result = 'error';


if (checkResult !== 1) {
  result = checkResult.message;
} else {
  result = my_split(args[0], args[1]).join('\n');
}


console.log(result);
>>>>>>> b1985fc6aa37a8a50b81564c53c2a3a727314e03
