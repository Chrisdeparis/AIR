const args = process.argv.slice(2);

// Vérifiez s'il y a au moins deux arguments (la liste et l'opération)
if (args.length < 2) {
  console.error('Error: Veuillez fournir une liste et une opération');
  process.exit(1);
}

// Récupérez l'opération en utilisant la méthode pop() sur le tableau d'arguments
const operation = args.pop();

// Vérifiez si l'opération est valide (soit '+' ou '-')
if (operation !== '+' && operation !== '-') {
  console.error('Error: L\'opération doit être + ou -');
  process.exit(1);
}

// Convertissez les arguments restants en nombres à l'aide de la méthode map()
const numbers = args.map(Number);

// Effectuez l'opération sur chaque nombre à l'aide de la méthode forEach()
numbers.forEach(number => {
  if (operation === '+') {
    console.log(number + 2);
  } else if (operation === '-') {
    console.log(number - 5);
  }
});
