// Exemples d’utilisation :
// $> cat a.txt
// Je danse le mia
// $> ruby exo.rb “a.txt”
// Je danse le mia


const fs = require('fs');

// Vérifiez si le nombre d'arguments est correct
if (process.argv.length !== 3) {
  console.error('Erreur : nombre incorrect d\'arguments');
  process.exit(1);
}

// Récupérez le nom du fichier à partir des arguments
const fileName = process.argv[2];

// Lisez le fichier
fs.readFile(fileName, 'utf8', (err, data) => {
  // Affichez une erreur si le fichier est inaccessible ou s'il y a une erreur autre
  if (err) {
    console.error(`Erreur : impossible d'accéder au fichier ${fileName}`);
    process.exit(1);
  }

  // Affichez le contenu du fichier
  console.log(data);
});
