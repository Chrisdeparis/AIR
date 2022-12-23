// Récupération de l'opération et de la valeur à utiliser
const operation = process.argv[process.argv.length - 1].slice(0, 1);
const value = Number(process.argv[process.argv.length - 1].slice(1));

if (operation !== '+' && operation !== '-') {
  console.error('Error: invalid operation');
  process.exit(1);
}

// Récupération de la liste des nombres
const numbers = process.argv.slice(2, -1).map(Number);

// Application de l'opération sur chaque nombre de la liste
for (let i = 0; i < numbers.length; i++) {
  if (operation === '+') {
    numbers[i] += value;
  } else {
    numbers[i] -= value;
  }
}

// Affichage du résultat
console.log(numbers.join(' '));
