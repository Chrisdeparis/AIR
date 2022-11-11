// Créez un programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne).
// Votre programme devra utiliser une fonction prototypée comme ceci :
// ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
// 	# votre algorithme
// 	return (tableau)
// }
// Exemples d’utilisation :
// $> python exo.py “Bonjour les gars”
// Bonjour
// les
// gars


let args = process.argv.slice(2);
if(args.length === 0) {
    console.log('error');
    return;
}

let str = args.toString();
// let space = /\s*,+\s*/g;


// console.log(sp);
// separateur virgule
let reg = /\,/g;
let spaceStr = str.replace(reg, " ");
// let stringSize = spaceStr.length;

// position index space

let char = ' ';
// retrouve tous les ID des espaces
const getIdofChar = (str, char) => {
    let tmpArr = [...str];
    char = char.toLowerCase();
    return tmpArr.reduce((results, elem, idx) => elem.toLowerCase() === char ? [...results, idx] : results, [] );
};
let results = getIdofChar(spaceStr, char);

// nbre de saut de ligne
let lineFeed = args.length;

const splitString = (str) => {
    let resultArray = [];
    let tempString = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        tempString += str[i];
      } else if (tempString.trim()) {
        //minor change
        resultArray.push(tempString);
        tempString = '';
      }
    }
    if (tempString) {
      //new step
      resultArray.push(tempString);
    }
    return resultArray.toString();
  };

for(let i=0; i< lineFeed; i++){
    console.log(splitString(args[i]))
}