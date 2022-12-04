const {readFileSync} = require('fs');
const rawData = readFileSync('./day1data.txt', 'utf-8');

const elfs = rawData
  .split('\n\n')
  .map(elf => elf.split('\n'))
  .map(
    elf => elf.reduce((prev, curr) => prev += parseInt(curr), 0)
  );

const topElfs = elfs
  .sort((a, b) => a < b ? 1 : -1)
  .slice(0, 3);

const sum = topElfs.reduce((prev, curr) => prev += curr, 0);

console.log('Part1:', topElfs[0]);
console.log('Part2:', sum);