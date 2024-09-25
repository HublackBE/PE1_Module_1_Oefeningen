import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);

let daysInput = parseFloat(await userInput.question('Aantal dagen: '));
let hoursInput = parseFloat(await userInput.question('Aantal uren: '));
let minutesInput = parseFloat(await userInput.question('Aantal minuten: '));
let secondsInput = parseFloat(await userInput.question('Aantal seconden: '));
let totalSeconds = daysInput*86400 + hoursInput*3600 + minutesInput*60 + secondsInput;

console.log('Totaal aantal seconden:', totalSeconds)