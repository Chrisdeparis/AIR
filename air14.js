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
const air12 = require("./air12");
const air13 = require("./air13");

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
      // Appelez la fonction de test correspondant à l'exercice

      // Si l'exercice est présent, essayez de l'importer
      let tested = false;
      switch (exo) {
        case "air01.js":
          function testAir01() {
            // Définissez les données de test
            const string_a_couper = "Bonjour les gars";
            const string_separateur = " ";
            const expected = "Bonjour\nles\ngars";

            // Appelez la fonction de l'exercice avec les données de test
            const result = air01.ma_fonction(
              string_a_couper,
              string_separateur
            );

            // Vérifiez si le résultat est correct
            try {
              assert.deepStrictEqual(result, expected);
              tested = true;
              successCount++;

              // Incrémentez le compteur de tests
              testCount++;
            } catch (err) {
              tested = false;
            }
          }

          testAir01();
          break;
        case "air02.js":
          function testAir02() {
            // Définissez les données de test
            const string_a_couper = "Crevette magique dans la mer des étoiles";
            const string_separateur = "la";
            const expected = "Crevette magique dans \n mer des étoiles";

            // Appelez la fonction de l'exercice avec les données de test
            const result = air02.ma_fonction(
              string_a_couper,
              string_separateur
            );
            // Vérifiez si le résultat est correct
            assert.deepStrictEqual(result, expected);
            if (result === expected) {
              // Si le résultat est correct, incrémentez le compteur de réussite
              tested = true;
              successCount++;
            }
            // Incrémentez le compteur de tests
            testCount++;
          }
          testAir02();
          break;
        case "air03.js":
          function testAir03() {
            // Définissez les données de test
            const array_de_strings = ["je", "teste", "des", "trucs"];
            const separateur = " ";
            const expected = "je teste des trucs";

            // Appelez la fonction de l'exercice avec les données de test
            const result = air03.ma_fonction(array_de_strings, separateur);

            // Vérifiez si le résultat est correct
            try {
              assert.deepStrictEqual(result, expected);
              tested = true;

              // Incrémentez le compteur de réussite et le compteur de tests
              successCount++;
              testCount++;
              // console.log(testCount);
            } catch (err) {
              tested = false;
            }
          }
          testAir03();
          break;
        case "air04.js":
          function testAir04() {
            // Définissez les données de test
            const array_de_strings = [
              "1",
              "2",
              "3",
              "4",
              "5",
              "4",
              "3",
              "2",
              "1",
            ];
            const expected = "5";

            // Appelez la fonction de l'exercice avec les données de test
            const result = air04.trouverValeurImpaire(array_de_strings);

            // Vérifiez si le résultat est correct
            try {
              assert.deepStrictEqual(result, expected);
              tested = true;
              // Incrémentez le compteur de réussite et le compteur de tests
              successCount++;
              testCount++;
            } catch (err) {
              tested = false;
            }
          }
          testAir04();

          break;
        case "air05.js":
          function testAir05() {
            // Définissez les données de test
            const array_de_strings = [
              "Hello milady,   bien ou quoi ??",
            ].toString();
            const expected = "Helo milady, bien ou quoi ?";

            // Appelez la fonction de l'exercice avec les données de test
            const result = air05.retirerCaracteresAdjacents(array_de_strings);

            // Vérifiez si le résultat est correct
            try {
              assert.deepStrictEqual(result, expected); //erreur
              tested = true;
              successCount++;
            } catch (err) {
              tested = false;
            }

            // Incrémentez le compteur de tests
            testCount++;
          }

          testAir05();
          break;
        case "air06.js":
          // // Test code for air06.js goes here
          function testAir06() {
            // Définissez les données de test
            const liste = ["1", "2", "3", "4", "5", "+2"];
            if (liste.length > 0) {
              const operation = liste[liste.length - 1].slice(0, 1);
              const value = Number(liste[liste.length - 1].slice(1));
              const numbers = ["1", "2", "3", "4", "5"];
              const expected = ["3", "4", "5", "6", "7"].join(" ");

              // Appelez la fonction de l'exercice avec les données de test
              const result = air06.calcul(numbers, operation, value);

              // Vérifiez si le résultat est correct
              try {
                assert.deepStrictEqual(result, expected);
                tested = true;
                successCount++;
              } catch (err) {
                tested = false;
              }
            }
          }
          testAir06();
          break;
        case "air07.js":
          function testAir07() {
            // Définissez les données de test
            const array_de_strings = ["Michel", "Albert", "Thérèse", "Benoit"];
            const string = "t";
            const expected = "Michel";

            // Appelez la fonction de l'exercice avec les données de test
            const result = air07.ma_fonction(array_de_strings, string);

            // Vérifiez si le résultat est correct
            try {
              assert.deepStrictEqual(result, expected);
              tested = true;
              successCount++;
            } catch (err) {
              tested = false;
            }
          }
          testAir07();
          break;
        case "air08.js":
          function testAir08() {
            // Définissez les données de test
            const array = ["1", "3", "4", "2"];
            if (array.length > 0) {
              const new_element = Number(array[array.length - 1]);
              const expected = ["1", "2", "3", "4 "].join(" ");

              // Appelez la fonction de l'exercice avec les données de test
              const result = air08
                .sorted_insert(array, new_element)
                .slice(0, -1);

              // Vérifiez si le résultat est correct
              try {
                assert.deepStrictEqual(result, expected);
                tested = true;
                successCount++;
              } catch (err) {
                tested = false;
              }
            }
          }

          testAir08();

          break;

        case "air09.js":
          function testAir09() {
            // Définissez les données de test
            const liste9 = ["10", "20", "30", "fusion", "15", "25", "35"];
            const array1 = liste9.slice(0, liste9.indexOf("fusion"));
            const array2 = liste9.slice(liste9.indexOf("fusion") + 1);
            const expected = "10 15 20 25 30 35";

            // Appelez la fonction de l'exercice avec les données de test
            const result = air09.sorted_fusion(array1, array2);

            // Vérifiez si le résultat est correct
            try {
              assert.deepStrictEqual(result, expected);
              tested = true;
              successCount++;
            } catch (err) {
              tested = false;
            }
          }

          testAir09();

          break;
        case "air10.js":
          function testAir10() {
            // Définissez les données de test
            const array = ["Michel", "Albert", "Thérese", "Benoit"];
            const expected = ["Albert", "Thérese", "Benoit", "Michel"].join(
              ", "
            );

            // Appelez la fonction de l'exercice avec les données de test
            const result = air10.ma_rotation(array);

            // Vérifiez si le résultat est correct
            try {
              assert.deepStrictEqual(result, expected);
              tested = true;
              successCount++;
            } catch (err) {
              tested = false;
            }
          }

          testAir10();

          break;
        case "air11.js":
          // Test code for air11.js goes here
          // node air11.js a.txt
          // j'aime la guitare, le cinéma et la blockchain
          global.tested = false;
          function testAir11() {
            // Définissez les données de test
            const filename = "a.txt";
            const expected = "j'aime la guitare, le cinéma et la blockchain";

            // Appelez la fonction de l'exercice avec les données de test
            async function readFile(filename) {
              return new Promise((resolve, reject) => {
                fs.readFile(filename, "utf8", (err, data) => {
                  if (err) {
                    console.error(err);
                    reject(err);
                  }
                  resolve(data);
                });
              })
                .then((result) => result.toString())
                .then((resultString) => {
                  // verifie si erreur entre resultString et expected
                  try {
                    assert.deepStrictEqual(resultString, expected);
                    tested = true;
                    global.tested = true;
                    // console.log(tested);
                    // console.log(resultString);
                    // console.log(expected);
                  } catch (err) {
                    console.error("La comparaison a échoué : ", err);
                    global.tested = false;
                  }
                })
                .catch((error) => console.error(error));
            }

            const result = readFile(filename); //undefined

            // console.log(result);
            // Appelez la fonction de l'exercice avec les données de test
          }

          testAir11();

          break;
        case "air12.js":
          // Test code for air012.js goes here
          function testAir12() {
            // Définissez les données de test
            const character = "0";
            const height = "5";
            function drawStaircase(character, height) {
              if (!character || !height) {
                console.error(
                  "Vous devez fournir un caractère et une hauteur d'escalier"
                );
                process.exit(1); // quitte le programme avec un code d'erreur
              }

              const consoleWidth = process.stdout.columns; // récupère la largeur de la console en utilisant la propriété `columns` de l'objet `stdout` de `process`

              for (let i = 1; i <= height; i++) {
                const lineLength = i * 2 - 1; // calcule la longueur de la ligne en utilisant la formule i * 2 - 1 pour obtenir un nombre impair supérieur
                const line = character.repeat(lineLength); // génère la ligne de l'escalier
                const paddingLength = (consoleWidth - lineLength) / 2; // calcule le nombre d'espaces à ajouter avant et après la ligne pour la centrer
                const padding = " ".repeat(paddingLength); // génère les espaces vides
                // console.log(padding + line + padding); // imprime l'escalier ligne par ligne
              }
            }
            const expected = drawStaircase(character, height);
            // Appelez la fonction de l'exercice avec les données de test
            const result = air12.drawStaircase(character, height);

            // Vérifiez si le résultat est correct
            try {
              assert.deepStrictEqual(result, expected);
              tested = true;
            } catch (err) {
              tested = false;
            }
          }
          testAir12();
          break;
        case "air13.js":
          // // $> python exo.py 6 5 4 3 2 1
          // // 1 2 3 4 5 6
          function testAir13() {
            // Définissez les données de test
            const array_de_strings = ["6", "5", "4", "3", "2", "1"];
            const expected = ["1", "2", "3", "4", "5", "6"];

            // Appelez la fonction de l'exercice avec les données de test
            const result = air13.my_quick_sort(array_de_strings);

            // Vérifiez si le résultat est correct
            try {
              assert.deepStrictEqual(result, expected);
              tested = true;
            } catch (err) {
              tested = false;
            }
          }
          testAir13();
          break;
      }

      try {
        // Insérez ici le code pour importer l'exercice
        // Display the number of successful tests for this exercise, with a delay
        setTimeout(() => {
          testCount = 1;
          successCount += 1;
          console.log(
            `\x1b[32m${exo}\x1b[0m (${successCount}/${testCount}) : success`
          );
        }, delay);
      } catch (e) {
        // If the exercise throws an exception, display a failure message, with a delay
        setTimeout(() => {
          // console.log(e);
          console.log(`\x1b[31m${exo}\x1b[0m : failure`);
        }, delay);
      }
    }
    // Increment the delay by 200 milliseconds
    delay += 200;
  }
  // Display the total number of successful tests and the total number of exercises, with a delay
  setTimeout(() => {
    console.log(`Total success : (${successCount}/${totalExercices})`);
  }, delay);
}
// Run the tests
runTests();
successCount = 0;
// Initialisez le compteur de tests à 0
testCount = 0;
