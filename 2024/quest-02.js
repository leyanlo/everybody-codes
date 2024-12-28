import { readFileSync } from 'node:fs';

const input1 = readFileSync('./quest-02-input1.txt', 'utf8').trimEnd();
const input2 = readFileSync('./quest-02-input2.txt', 'utf8').trimEnd();
const input3 = readFileSync('./quest-02-input3.txt', 'utf8').trimEnd();

function solve1(input) {
  const [top, bottom] = input.split('\n\n');
  const runes = top.split(/\W/).slice(1);
  let count = 0;
  for (const rune of runes) {
    count += Array.from(bottom.matchAll(rune)).length;
  }
  console.log(count);
}
solve1(input1);

function solve2(input) {
  const [top, bottom] = input.split('\n\n');
  const runes = top.split(/\W/).slice(1);
  const reverseRunes = runes.map((rune) => rune.split('').reverse().join(''));
  const allRunes = [runes, reverseRunes].flat();
  const found = Array.from(bottom).fill(0);
  for (let i = 0; i < bottom.length; i++) {
    for (const rune of allRunes) {
      if (bottom.substring(i, i + rune.length) === rune) {
        for (let j = 0; j < rune.length; j++) {
          found[i + j] = 1;
        }
      }
    }
  }
  console.log(found.reduce((acc, n) => acc + n));
}
solve2(input2);

const DIRS = [
  [0, 1],
  [1, 0],
];

function solve3(input) {
  let [top, bottom] = input.split('\n\n');
  bottom = bottom.split('\n');
  const h = bottom.length;
  const w = bottom[0].length;

  const runes = top.split(/\W/).slice(1);
  const reverseRunes = runes.map((rune) => rune.split('').reverse().join(''));
  const allRunes = [runes, reverseRunes].flat();
  const found = bottom.map((row) => row.split('').map(() => 0));
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      for (const rune of allRunes) {
        outer: for (const [di, dj] of DIRS) {
          let [i2, j2] = [i, j];
          const path = [];
          for (let k = 0; k < rune.length; k++) {
            if (rune[k] !== bottom[i2]?.[j2]) {
              continue outer;
            }

            path.push([i2, j2]);
            [i2, j2] = [i2 + di, (j2 + dj) % w];
          }

          for (const [i2, j2] of path) {
            found[i2][j2] = 1;
          }
        }
      }
    }
  }
  console.log(found.flat().reduce((acc, n) => acc + n));
}
solve3(input3);
