const fs = require("fs");

const assert = require("assert");
const air01 = require("./air01");
const air02 = require("./air02");
const air03 = require("./air03");
// const air04 = require("./air04");
// const air05 = require("./air05");
// const air06 = require("./air06");
// const air07 = require("./air07");
// const air08 = require("./air08");
// const air09 = require("./air09");
// const air10 = require("./air10");
// const air11 = require("./air11");
// const air12 = require("./air12");
// const air13 = require("./air13");

// Liste des exercices de l'épreuve de l'air
const exercices = [
  "air01.js",
  "air02.js",
  "air03.js",
  "air04.js",
  "air05.js",
  "air06.js",
  "air07.js",
  "air08.js",
  "air09.js",
  "air10.js",
  "air11.js",
  "air12.js",
  "air13.js",
];

// Nombre total d'exercices
const totalExercices = exercices.length;

// Compteur de réussite
let successCount = 0;
// Initialisez le compteur de tests à 0
let testCount = 0;
// Parcourez chaque exercice
for (const exo of exercices) {
  // Vérifiez si l'exercice est présent dans le répertoire
  if (fs.existsSync(exo)) {
    // Si l'exercice est présent, essayez de l'importer
    let tested = false;
    switch (exo) {
      case "air01.js":
        const string_a_couper = "Bonjour les gars";
        const string_separateur = " ";
        var result, expected;
        result = air01.ma_fonction(string_a_couper, string_separateur);
        expected = "Bonjour\nles\ngars";
        tested = true;
        break;
      case "air02.js":
        // Test code for air02.js goes here
        const string_a_couper_2 = "Crevette magique dans la mer des étoiles";
        const string_separateur_2 = "la";
        var result, expected;
        result = air02.ma_fonction(string_a_couper_2, string_separateur_2);
        expected = "Crevette magique dans\n mer des étoiles";
        tested = true;
        break;
      case "air03.js":
        // Test code for air03.js goes here
        const array_de_strings = ["je", "teste", "des", "trucs"];
        const separateur = " ";
        var result, expected;
        result = air03.ma_fonction(array_de_strings, separateur);
        expected = "Crevette magique dans\n mer des étoiles";
        tested = true;
        break;
      
    }
    if(tested) {
      try {
        // Insérez ici le code pour importer l'exercice
        // Affichez le nombre de tests réussis pour cet exercice
        successCount += 1;
        console.log(`\x1b[32m${exo}\x1b[0m (1/1) : success`);
      } catch (e) {
        // Si l'exercice lève une exception, affichez un message d'échec
        console.log(`\x1b[31m${exo}\x1b[0m : failure`);
      }
    } else {
      console.log(`\x1b[31m${exo}\x1b[0m (0/1) : failure`);
    }
    
  } else {
    // Si l'exercice n'est pas présent, affichez un message d'échec
    console.log(`\x1b[31m${exo}\x1b[0m : failure`);
  }
}

// Affichez le nombre total de réussite et le pourcentage de réussite
console.log(`Total success: (${successCount}/${totalExercices})`);
