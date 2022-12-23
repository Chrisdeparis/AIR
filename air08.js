// Exemples d’utilisation :
// $> node exo.js 1 3 4 2
// 1 2 3 4

const sorted_insert = (array, new_element) => {
    // Vérifier que la liste n'est pas vide
    if (array.length === 0) {
      console.error("La liste est vide");
      return;
    }
    // Vérifier que l'élément à insérer n'est pas vide
    if (new_element === undefined || new_element === null) {
      console.error("L'élément à insérer est vide");
      return;
    }
    // Parcourir la liste
    for (let i = 0; i < array.length; i++) {
      // Si l'élément est inférieur ou égal à l'élément courant, on l'insère à cet emplacement
      if (new_element <= array[i]) {
        array.splice(i, 0, new_element);
        return array.join(' ');
      }
    }
    // Si l'élément est plus grand que tous les autres, on l'ajoute à la fin de la liste
    array.push(new_element);
    return array.join(' ');
  };
  
  // Récupérer les arguments passés en ligne de commande
  const array = process.argv.slice(2, -1).map(Number);
  const new_element = Number(process.argv[process.argv.length - 1]);
  
  // Afficher le résultat ou un message d'erreur
  console.log(array.length > 0 && new_element !== undefined && new_element !== null
    ? sorted_insert(array, new_element)
    : "Erreur : veuillez fournir une liste et un élément à insérer");
  
  
  