// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let numInput1 = parseFloat(await userInput.question('Nummer 1: '));
let numInput2 = parseFloat(await userInput.question('Nummer 2: '));

console.log('De som van', numInput1, 'en', numInput2, 'is', numInput1+numInput2);

process.exit();
