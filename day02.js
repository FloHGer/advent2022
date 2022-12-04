const {readFileSync} = require('fs');
const rawData = readFileSync('./day2data.txt', 'utf-8')

const games = rawData
  .replaceAll('X', 'A')
  .replaceAll('Y', 'B')
  .replaceAll('Z', 'C')
  .split('\n')
  .map(game => game.split(' '));

const gameResultsA = games.map(game => {
  if(game[1] == 'A'){
    if(game[0] == 'C') return 1 + 6;
    if(game[0] == 'A') return 1 + 3;
    return 1;
  };
  if(game[1] == 'B'){
    if(game[0] == 'A') return 2 + 6;
    if(game[0] == 'B') return 2 + 3;
    return 2;
  };
  if(game[0] == 'B') return 3 + 6;
  if(game[0] == 'C') return 3 + 3;
  return 3;
});

const gameResultsB = games.map(game => {
  if(game[0] == 'A'){
    if(game[1] == 'C') return 2 + 6;
    if(game[1] == 'B') return 1 + 3;
    return 3;
  };
  if(game[0] == 'B'){
    if(game[1] == 'C') return 3 + 6;
    if(game[1] == 'B') return 2 + 3;
    return 1;
  };
  if(game[1] == 'C') return 1 + 6;
  if(game[1] == 'B') return 3 + 3;
  return 2;
});

const scoreA = gameResultsA.reduce((prev, curr) => prev += curr, 0);
const scoreB = gameResultsB.reduce((prev, curr) => prev += curr, 0);

console.log('Part1:', scoreA);
console.log('Part2:', scoreB);
