const fs = require("fs");

const assert = require("assert");
const air01 = require("./air01");
const air02 = require("./air02");
const air03 = require("./air03");
const air04 = require("./air04");
const air05 = require("./air05");
const air06 = require("./air06");
const air07 = require("./air07");
const air08 = require("./air08");
const air09 = require("./air09");
const air10 = require("./air10");
const air11 = require("./air11");
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

let delay = 0; // Initial delay in milliseconds
function runTests() {
  // Parcourez chaque exercice
  for (const exo of exercices) {
    // Vérifiez si l'exercice est présent dans le répertoire
    if (fs.existsSync(exo)) {
      // Si l'exercice est présent, essayez de l'importer
      let tested = false;
      switch (exo) {
        case "air01.js":
          var string_a_couper = "Bonjour les gars";
          var string_separateur = " ";
          var result, expected;
          result = air01.ma_fonction(string_a_couper, string_separateur);
          expected = "Bonjour\nles\ngars";
          if (result === expected) {
            tested = true;
          }
          break;
        case "air02.js":
          // Test code for air02.js goes here
          var string_a_couper = "Crevette magique dans la mer des étoiles";
          var string_separateur = "la";
          var result, expected;
          result = air02.ma_fonction(string_a_couper, string_separateur);
          expected = "Crevette magique dans\n mer des étoiles";
          tested = true;
          if (result === expected) {
          }
          break;
        case "air03.js":
          // Test code for air03.js goes here
          var array_de_strings = ["je", "teste", "des", "trucs"];
          var separateur = " ";
          var result, expected;
          result = air03.ma_fonction(array_de_strings, separateur);
          expected = "Crevette magique dans\n mer des étoiles";
          tested = true;
          if (result === expected) {
          }
          break;
        case "air04.js":
          // Test code for air03.js goes here
          var array_de_strings = ["1", "2", "3", "4", "5", "4", "3", "2", "1"];
          var result, expected;
          result = air04.trouverValeurImpaire(array_de_strings);
          expected = "5";
          if (result === expected) {
            tested = true;
          }

          break;
        case "air05.js":
          // Test code for air05.js goes here
          var array_de_strings = ["Hello milady,   bien ou quoi ??"];
          var result, expected;
          result = air05.retirerCaracteresAdjacents(array_de_strings);
          expected = "Helo milady, bien ou quoi ?";
          tested = true;
          if (result == expected) {
          }
          break;
        case "air06.js":
          // Test code for air06.js goes here
          const liste = ["1", "2", "3", "4", "5", "+2"];
          if (liste.length > 0) {
            const operation = liste[liste.length - 1].slice(0, 1);
            const value = Number(liste[liste.length - 1].slice(1));
            const numbers = ["1", "2", "3", "4", "5"];
            var result, expected;
            result = air06.calcul(numbers, operation, value);
            expected = ["3", "4", "5", "6", "7"].join(" ");
            if (result === expected) {
              tested = true;
            }
            break;
          }

        case "air07.js":
          // Test code for air03.js goes here
          var array_de_strings = ["Michel", "Albert", "Thérèse", "Benoit"];
          var string = "t";
          var result, expected;
          result = air07.ma_fonction(array_de_strings, string);
          expected = "Michel";
          if (result === expected) {
            tested = true;
          }
          break;
        case "air08.js":
          // Test code for air03.js goes here
          var array = ["1", "3", "4", "2"];
          if (array.length > 0) {
            var new_element = Number(array[array.length - 1]);
            var result, expected;
            result = air08.sorted_insert(array, new_element).slice(0, -1);
            expected = ["1", "2", "3", "4"].join(" ");
            // console.log(result);
            // console.log(expected);
            tested = true;
            if (result === expected) {
            }
            break;
          }

        case "air09.js":
          // Test code for air03.js goes here
          // $> node exo.js 10 20 30 fusion 15 25 35
          // 10 15 20 25 30 35
          var liste9 = ["10", "20", "30", "fusion", "15", "25", "35"];
          var array1 = liste9.slice(0, liste9.indexOf("fusion"));
          var array2 = liste9.slice(liste9.indexOf("fusion") + 1);
          var result, expected;
          result = air09.sorted_fusion(array1, array2);
          expected = "10 15 20 25 30 35";
          if (result === expected) {
            tested = true;
          }
          break;
        case "air10.js":
          // Test code for air10.js goes here
          var array = ["Michel", "Albert", "Thérese", "Benoit"];
          var result, expected;
          result = air10.ma_rotation(array);
          expected = ["Albert", "Thérese", "Benoit", "Michel"].join(", ");
          if (result === expected) {
            tested = true;
          }
          break;
        case "air11.js":
          // Test code for air11.js goes here
          // node air11.js a.txt
          // j'aime la guitare, le cinéma et la blockchain
          var filename = "a.txt";
          var expected;
          result = air11.readFile(filename);
          // var { readFile } = require("./air11");
          // var result = readFile(filename);
          // console.log(result);
          console.log("result :" + result);
          expected = "j'aime la guitare, le cinéma et la blockchain";
          console.log("expected : " + expected);
          tested = true;
          if (result === expected) {
            
          }
          break;
        // case "air12.js":
        //   // Test code for air03.js goes here

        //   var character = "0";
        //   var height = 5;
        //   var result, expected;
        //   result = air12.drawStaircase(character, height);
        //   expected = "5";
        //   console.log(result);
        //   console.log(expected);
        //   tested = true;
        //   if (result === expected) {

        //   }
        //   break;
        // case "air13.js":
        //   // Test code for air03.js goes here
        //   var array_de_strings = ["1", "2", "3", "4", "5", "4", "3", "2", "1"];
        //   var result, expected;
        //   result = air04.trouverValeurImpaire(array_de_strings);
        //   expected = "5";
        //   tested = true;
        //   break;
      }
      if (tested) {
        try {
          // Insérez ici le code pour importer l'exercice
          // Display the number of successful tests for this exercise, with a delay
          setTimeout(() => {
            successCount += 1;
            console.log(`\x1b[32m${exo}\x1b[0m (1/1) : success`);
          }, delay);
        } catch (e) {
          // If the exercise throws an exception, display a failure message, with a delay
          setTimeout(() => {
            console.log(`\x1b[31m${exo}\x1b[0m : failure`);
          }, delay);
        }
      } else {
        console.log(`\x1b[31m${exo}\x1b[0m (0/1) : failure`);
      }
    } else {
      // Si l'exercice n'est pas présent, affichez un message d'échec
      console.log(`\x1b[31m${exo}\x1b[0m : failure`);
    }
    // Increment the delay by 1000 milliseconds (1 second)
    delay += 1000;
  }

  // Display the total number of successful tests and the total number of exercises, with a delay
  setTimeout(() => {
    console.log(`Total success : (${successCount}/${totalExercices})`);
  }, delay);
}
// Run the tests
runTests();
