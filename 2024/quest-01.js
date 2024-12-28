import { readFileSync } from 'node:fs';

const input1 = readFileSync('./quest-01-input1.txt', 'utf8').trimEnd();
const input2 = readFileSync('./quest-01-input2.txt', 'utf8').trimEnd();
const input3 = readFileSync('./quest-01-input3.txt', 'utf8').trimEnd();

const N_POTIONS = {
  A: 0,
  B: 1,
  C: 3,
  D: 5,
};

function solve(input, part) {
  let sum = 0;
  for (let i = 0; i < input.length; i += part) {
    const group = input.substring(i, i + part).split('');
    const xCount = group.filter((c) => c === 'x').length;
    sum += group
      .filter((c) => c !== 'x')
      .map((c) => N_POTIONS[c] + (part - xCount - 1))
      .reduce((acc, n) => acc + n, 0);
  }
  console.log(sum);
}
solve(input1, 1);
solve(input2, 2);
solve(input3, 3);
