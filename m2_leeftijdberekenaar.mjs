import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);

let birthYear = parseFloat(await userInput.question('In welk jaar ben je geboren? '));
let futureYear = parseFloat(await userInput.question('Geef een jaartal in de toekomst: '));
let futureAge = futureYear - birthYear;

console.log('In', futureYear, 'zal ik', futureAge-1, 'of', futureAge, 'zijn.');

process.exit();