// Exemples d’utilisation :
// $> python exo.py 6 5 4 3 2 1
// 1 2 3 4 5 6


function my_quick_sort(array) {
    // Vérifiez que le tableau n'est pas vide
    if (array.length === 0) {
      return [];
    }
  
    // Si le tableau ne contient qu'un seul élément, il est déjà trié
    else if (array.length === 1) {
      return array;
    }
  
    // Sélectionnez un pivot au hasard
    const pivotIndex = Math.floor(Math.random() * array.length);
    const pivot = array[pivotIndex];
  
    // Séparez les éléments du tableau en deux sous-tableaux :
    // ceux qui sont inférieurs au pivot et ceux qui sont supérieurs
    const left = [];
    const right = [];
    for (let i = 0; i < array.length; i++) {
      if (i === pivotIndex) continue; // Ne prenez pas en compte le pivot
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  
    // Appliquez récursivement l'algorithme de tri rapide sur les sous-tableaux
    const leftSorted = my_quick_sort(left);
    const rightSorted = my_quick_sort(right);
  
    // Concaténez les sous-tableaux triés et le pivot pour obtenir le tableau final trié
    return [...leftSorted, pivot, ...rightSorted];
  }
  
  
  // Utilisez la fonction de tri rapide comme ceci :
  const numbers = process.argv.slice(2).map(x => {
    const number = parseInt(x);
    if (Number.isNaN(number)) {
      console.error(`"${x}" n'est pas un nombre`);
      process.exit(1);
    }
    return number;
  });

  if (numbers.length === 0) {
    console.error("error: Aucun argument reçu");
    process.exit(1);
  }

  const sortedArray = my_quick_sort(numbers).join(' ');
  console.log( sortedArray);

//exporter la fonction pour exo air14.js
module.exports = {
  "my_quick_sort": my_quick_sort,
};
  