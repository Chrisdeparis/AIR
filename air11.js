// Exemples d’utilisation :
// $> cat a.txt
// Je danse le mia
// $> ruby exo.rb “a.txt”
// Je danse le mia
const path = require("path");

const fs = require("fs");

function readFile(fileName) {
  const filename = path.basename(process.argv[1]);
  if (filename === "air14.js") {
    return;
  }
  // Vérifiez si le nombre d'arguments est correct
  if (process.argv.length !== 3) {
    console.error("Erreur : nombre incorrect d'arguments");
    process.exit(1);
  }
  // Lisez le fichier
  fs.readFile(fileName, "utf8", (err, data) => {
    // Affichez une erreur si le fichier est inaccessible ou s'il y a une erreur autre
    if (err) {
      console.error(`Erreur : impossible d'accéder au fichier ${fileName}`);
      process.exit(1);
    }
    
    console.log(data);
    // Affichez le contenu du fichier
    return data;
  });
}

// const filename = path.basename(process.argv[1]);
// Example usage:

// Récupérez le nom du fichier à partir des arguments
const fileName = process.argv[2];
readFile(fileName);

//exporter la fonction pour exo air14.js

  module.exports = {
    "readFile": readFile,
  };