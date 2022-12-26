// Récupération de l'opération et de la valeur à utiliser
const path = require("path");
const operation = process.argv[process.argv.length - 1].slice(0, 1);
const value = Number(process.argv[process.argv.length - 1].slice(1));
const filename = path.basename(process.argv[1]);

// error test ldc
if(filename !== 'air14.js'){
  if (operation !== "+" && operation !== "-") {
    console.error("Error: invalid operation");
    process.exit(1);
  }
}


// Récupération de la liste des nombres

const numbers = process.argv.slice(2, -1).map(Number);

function calcul(numbers, operation, value) {
  value = parseInt(value);

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = parseInt(numbers[i]);

    if (operation === '+') {
      numbers[i] += value;
    } else if (operation === '-') {
      numbers[i] -= value;
    }
  }

  return numbers.join(' ');
}

// Affichage du résultat
console.log(calcul(numbers, operation, value));

//exporter la fonction pour exo air14.js
module.exports = {
  "calcul": calcul,
};
