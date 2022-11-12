// Créez un programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.
// Votre programme devra intégrer une fonction prototypée comme ceci :
// ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
// 	# votre algorithme
// 	return (tableau)
// }

let arg = process.argv.slice(2)[0];
let arg2 = process.argv.slice(2)[1];

if (
    arg === undefined ||
    arg2 === undefined ||
  arg.lenght === 0 ||
  arg2.length === 0 ||
  arg2 === "" ||
  arg === "" 
  
) {
  console.log("error");
  return;
} else {
  let str = arg.toString();
  let str2 = arg2.toString();

  if (arg.includes(arg2)) {
    let remove = arg2;
    // separateur virgule
    let reg = /\,/g;
    let spaceStr = str.replace(reg, " ");

    const ma_fonction = (str, str2) => {
      let spaceStr = str.replace(reg, " ");
      let resultat = [];
      // console.log(str);
      resultat.push(str);
      let input = resultat.toString();
      let arr = input.split(" ");

      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arg2) {
          // console.log(arr.indexOf(arg2));
          let line1 = arr.slice(0, arr.indexOf(arg2)).toString();
          let line2 = arr.slice(arr.indexOf(arg2) + 1).toString();
          let reponse1 = line1.replace(reg, " ");
          let reponse2 = line2.replace(reg, " ");
          console.log(reponse1);
          console.log(reponse2);
          delete arr[i];
        }
      }
    };

    ma_fonction(spaceStr, remove);
  } else {
    console.log("error");
    return;
  }
}
