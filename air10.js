// Exemples d’utilisation :
// $> python exo.py “Michel” “Albert” “Thérèse” “Benoit”
// Albert, Thérèse, Benoit, Michel


function ma_rotation(array) {
    if (!array || array.length === 0) {
      console.error("Erreur : tableau vide ou non défini");
      process.exit(1);
    }
  
    // On enlève le premier élément du tableau et on le place à la fin
    let premier_element = array.shift();
    array.push(premier_element);
  
    return array.join(' ');
  }
  // On récupère les arguments en ligne de commande
let array = process.argv.slice(2);

// On vérifie que le tableau n'est pas vide
if (!array || array.length === 0) {
  console.error("Erreur : aucun argument en ligne de commande");
  process.exit(1);
}

let new_array = ma_rotation(array);
console.log(new_array);
