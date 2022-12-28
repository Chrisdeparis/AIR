#!/usr/bin/env node

const adjective = process.argv[2];

if (!adjective) {
  console.error("Vous devez fournir un adjectif pour décrire votre victoire!");
  process.exit(1);
}

console.log(`J'ai terminé l'épreuve et c'était ${adjective}!`);
