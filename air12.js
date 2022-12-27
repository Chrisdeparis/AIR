// Exemples d’utilisation :
// $> ruby exo.rb O 5
//     O
//    OOO
//   OOOOO
//  OOOOOOO
// OOOOOOOOO
const path = require("path");

function drawStaircase(character, height) {
  if (!character || !height) {
    console.error("Vous devez fournir un caractère et une hauteur d'escalier");
    process.exit(1); // quitte le programme avec un code d'erreur
  }

  const consoleWidth = process.stdout.columns; // récupère la largeur de la console en utilisant la propriété `columns` de l'objet `stdout` de `process`

  for (let i = 1; i <= height; i++) {
    const lineLength = i * 2 - 1; // calcule la longueur de la ligne en utilisant la formule i * 2 - 1 pour obtenir un nombre impair supérieur
    const line = character.repeat(lineLength); // génère la ligne de l'escalier
    const paddingLength = (consoleWidth - lineLength) / 2; // calcule le nombre d'espaces à ajouter avant et après la ligne pour la centrer
    const padding = " ".repeat(paddingLength); // génère les espaces vides
    console.log(padding + line + padding); // imprime l'escalier ligne par ligne
  }
}

const filename = path.basename(process.argv[1]);

if (filename !== "air14.js") {
  // Example usage:
  const args = process.argv.slice(2); // récupère les arguments en ligne de commande en ignorant les deux premiers (node et le nom du fichier)
  const character = args[0]; // le premier argument est le caractère à utiliser pour dessiner l'escalier
  const height = parseInt(args[1], 10); // le deuxième argument est la hauteur de l'escalier, que nous convertissons en entier
  drawStaircase(character, height);
}

//exporter la fonction pour exo air14.js
module.exports = {
  drawStaircase: drawStaircase,
};
