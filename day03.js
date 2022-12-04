const {readFileSync} = require('fs');
const rawData = readFileSync('./day3data.txt', 'utf-8');

const refinedData = rawData
  .split('\n')
  .map(content => content.split(''));

const backpacks = refinedData
  .map(content => {
    const half = content.length / 2;
    return [content.slice(0, half), content.slice(-half)];
  });

const duplicates = backpacks
  .map(bag => bag[0]
    .filter(item =>
      bag[1].includes(item)
    )[0]
  );

const priorities = (input) => {
  return input
    .map(letter =>
      letter === letter.toUpperCase()
      ? letter.charCodeAt(0) - 38
      : letter.charCodeAt(0) - 96
    )
    .reduce((prev, curr) => prev += curr, 0);;
}

// Part 2
const groups = [];
for(let i = 0; i<300; i += 3){
  const group = [];
  group.push(refinedData[i], refinedData[i + 1], refinedData[i + 2]);
  groups.push(group);
}

const groupDuplicates = groups
  .map(group => group[0]
    .filter(item => group[1].includes(item) && group[2].includes(item))[0]
  );

console.log('Part 1:', priorities(duplicates));
console.log('Part 2:', priorities(groupDuplicates));
