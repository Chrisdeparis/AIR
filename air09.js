// Exemples d’utilisation :
// $> node exo.js 10 20 30 fusion 15 25 35
// 10 15 20 25 30 35
const path = require("path");

function sorted_fusion(array1, array2) {
    // Vérifiez si les deux tableaux sont vides
    if (array1.length === 0) {
      return array2;
    }
    if (array2.length === 0) {
      return array1;
    }
  
    // Initialisez un nouveau tableau qui contiendra les éléments fusionnés
    const mergedArray = [];
  
    // Initialisez deux variables pour parcourir les deux tableaux
    let index1 = 0;
    let index2 = 0;
  
    // Fusionnez les éléments des deux tableaux tant qu'il reste des éléments à parcourir dans les deux tableaux
    while (index1 < array1.length && index2 < array2.length) {
      // Compare les éléments des deux tableaux et ajoutez le plus petit à la fin du tableau fusionné
      if (array1[index1] < array2[index2]) {
        mergedArray.push(array1[index1]);
        index1++;
      } else {
        mergedArray.push(array2[index2]);
        index2++;
      }
    }
  
    // Ajoutez les éléments restants du premier tableau s'il en reste
    while (index1 < array1.length) {
      mergedArray.push(array1[index1]);
      index1++;
    }
  
    // Ajoutez les éléments restants du deuxième tableau s'il en reste
    while (index2 < array2.length) {
      mergedArray.push(array2[index2]);
      index2++;
    }
  
    return mergedArray.join(' ');
  }
  

const array1 = process.argv.slice(2, process.argv.indexOf("fusion"));
const array2 = process.argv.slice(process.argv.indexOf("fusion") + 1);
const filename = path.basename(process.argv[1]);

// Vérifiez si les tableaux sont vides
if(filename !== 'air14.js') {
  if (array1.length === 0 || array2.length === 0) {
    console.error("Error: Invalid arguments");
    process.exit(1);
  }
  console.log(sorted_fusion(array1, array2));
}




//exporter la fonction pour exo air14.js
module.exports = {
  "sorted_fusion": sorted_fusion,
};