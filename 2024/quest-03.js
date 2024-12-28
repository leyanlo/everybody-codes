import { readFileSync } from 'node:fs';

var input = ``;
var input = readFileSync('./quest-03-input1.txt', 'utf8').trimEnd();
// var input = readFileSync('./quest-03-input2.txt', 'utf8').trimEnd();
// var input = readFileSync('./quest-03-input3.txt', 'utf8').trimEnd();

function solve(input) {
  console.log(input);
}
solve(input);
